import xs from 'xstream';
import mitt from 'mitt';
import QiscusSDK from 'qiscus-sdk-core';

function distinct(stream) {
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
        },
      });
    },
    stop() {
      subscription?.unsubscribe();
    },
  });
}

export const qiscus = new QiscusSDK();
const appId = 'sdksample';

const event = mitt();
export const event$ = xs.create({
  start(listener) {
    event.on('event', function (data) {
      listener.next({
        kind: data.kind,
        data: data.data,
      });
    });
  },
  stop() {},
});

export function init() {
  console.log('initiate qiscus');
  qiscus.init({
    AppId: appId,
    options: {
      loginSuccessCallback(authData) {
        event.emit('event', {kind: 'login-success', data: authData});
      },
      newMessagesCallback(messages) {
        messages.forEach((message) => {
          event.emit('event', {kind: 'new-message', data: message});
        });
      },
      presenceCallback(data) {
        data = data.split(':');
        const isOnline = data[0] === '1';
        const lastOnline = new Date(Number(data[1]));
        event.emit('event', {
          kind: 'online-presence',
          data: {isOnline, lastOnline},
        });
      },
      commentReadCallback: (data) => {
        event.emit('event', {kind: 'comment-read', data});
      },
      commentDeliveredCallback(data) {
        event.emit('event', {kind: 'comment-delivered', data});
      },
      typingCallback(data) {
        event.emit('event', {kind: 'typing', data});
      },
      chatRoomCreatedCallback(data) {
        event.emit('event', {kind: 'chat-room-created', data});
      },
    },
  });
}

export const currentUser = () => qiscus.userData;
export const login$ = () =>
  event$.filter((it) => it.kind === 'login-success').map((it) => it.data);
export const isLogin$ = () =>
  xs
    .periodic(300)
    .map(() => qiscus.isLogin)
    .compose(distinct)
    .filter((it) => it === true);
export const newMessage$ = () =>
  event$.filter((it) => it.kind === 'new-message').map((it) => it.data);
export const messageRead$ = () =>
  event$.filter((it) => it.kind === 'comment-read').map((it) => it.data);
export const messageDelivered$ = () =>
  event$.filter((it) => it.kind === 'comment-delivered').map((it) => it.data);
export const onlinePresence$ = () =>
  event$.filter((it) => it.kind === 'online-presence').map((it) => it.data);
export const typing$ = () =>
  event$.filter((it) => it.kind === 'typing').map((it) => it.data);

export function setDeviceToken(token) {
  console.log('qiscus.isLogin', qiscus.isLogin);
  console.log('qiscus.userData', qiscus.userData);

  return qiscus.setDeviceToken(token);
}
