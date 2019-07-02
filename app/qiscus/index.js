import xs from "xstream";
import mitt from "mitt";
import axios from "axios";
import QiscusSDK from "qiscus-sdk-core";

/// xstream composable utils
const distinct = stream => {
  let subscription = null;
  let lastData = null;
  return xs.create({
    start(listener) {
      subscription = stream.subscribe({
        next(data) {
          if (data === lastData) return;
          lastData = data;
          listener.next(data);
        },
        error(error) {
          listener.error(error);
        },
        complete() {
          listener.complete();
        }
      });
    },
    stop() {
      subscription.unsubscribe();
    }
  });
};

export const qiscus = new QiscusSDK();
const appId = "sdksample";

const event = mitt();
export const event$ = xs.create({
  start(emitter) {
    event.on("event", data =>
      emitter.next({
        kind: data.kind,
        data: data.data
      })
    );
  },
  stop() {}
});

export const init = () => {
  qiscus.init({
    AppId: appId,
    options: {
      loginSuccessCallback(authData) {
        event.emit("event", { kind: "login-success", data: authData });
      },
      newMessagesCallback(messages) {
        const message = messages.shift();
        event.emit("event", { kind: "new-message", data: message });
      },
      presenceCallback(data) {
        data = data.split(":");
        const isOnline = data[0] === "1";
        const lastOnline = new Date(Number(data[1]));
        event.emit("event", {
          kind: "online-presence",
          data: { isOnline, lastOnline }
        });
      },
      commentReadCallback: data => {
        event.emit("event", { kind: "comment-read", data });
      },
      commentDeliveredCallback(data) {
        event.emit("event", { kind: "comment-delivered", data });
      },
      typingCallback(data) {
        event.emit("event", { kind: "typing", data });
      },
      chatRoomCreatedCallback(data) {
        event.emit("event", { kind: "chat-room-created", data });
      }
    }
  });
};

export const currentUser = () => qiscus.userData;
export const login$ = () =>
  event$.filter(it => it.kind === "login-success").map(it => it.data);
export const isLogin$ = () =>
  xs
    .periodic(300)
    .map(() => qiscus.isLogin)
    .compose(distinct)
    .filter(it => it === true);
export const newMessage$ = () =>
  event$.filter(it => it.kind === "new-message").map(it => it.data);
export const messageRead$ = () =>
  event$.filter(it => it.kind === "comment-read").map(it => it.data);
export const messageDelivered$ = () =>
  event$.filter(it => it.kind === "comment-delivered").map(it => it.data);
export const onlinePresence$ = () =>
  event$.filter(it => it.kind === "online-presence").map(it => it.data);
export const typing$ = () =>
  event$.filter(it => it.kind === "typing").map(it => it.data);

export function setDeviceToken(token) {
  console.log("qiscus.isLogin", qiscus.isLogin);
  console.log("qiscus.userData", qiscus.userData);
  const userToken = qiscus.userData.token;
  return axios
    .post(
      `${qiscus.baseURL}/api/v2/mobile/set_user_device_token`,
      {
        token: userToken,
        device_token: token,
        device_platform: "rn"
      },
      {
        headers: {
          qiscus_sdk_app_id: qiscus.AppId,
          qiscus_sdk_token: userToken,
          qiscus_sdk_user_id: qiscus.user_id
        }
      }
    )
    .then(res => {
      console.log("success sending device token", res);
    })
    .catch(error => {
      console.log("failed sending device token", error);
    });
}
