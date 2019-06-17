import xs from 'xstream';
import mitt from 'mitt';
import QiscusSDK from 'qiscus-sdk-core';

export const qiscus = new QiscusSDK();
const appId = 'sdksample';

const event = mitt();
export const event$ = xs.create({
  start(emitter) {
    event.on('event', (data) => emitter.next({
      kind: data.kind,
      data: data.data
    }))
  },
  stop() {
  }
});

export const init = () => {
  qiscus.init({
    AppId: appId,
    options: {
      loginSuccessCallback(authData) {
        event.emit('event', { kind: 'login-success', data: authData })
      },
      newMessagesCallback(messages) {
        const message = messages.shift();
        event.emit('event', { kind: 'new-message', data: message })
      },
      presenceCallback(data) {
        data = data.split(':');
        const isOnline = data[0] === '1';
        const lastOnline = new Date(data[1]);
        event.emit('event', { kind: 'presence', data: { isOnline, lastOnline }})
      },
      commentReadCallback: (data) => {
        event.emit('event', { kind: 'comment-read', data })
      },
      commentDeliveredCallback(data) {
        event.emit('event', { kind: 'comment-delivered', data })
      },
      typingCallback(data) {
        event.emit('event', { kind: 'typing', data })
      },
      chatRoomCreatedCallback(data) {
        event.emit('event', { kind: 'chat-room-created', data })
      }
    }
  });
};

export const currentUser = () => qiscus.userData;
export const login$ = () => event$.filter(it => it.kind === 'login-success')
  .map(it => it.data);
export const isLogin$ = () => event$.filter(it => it.kind === 'login-success')
  .map(it => it != null)
  .startWith(qiscus.isLogin);
export const newMessage$ = () => event$.filter(it => it.kind === 'new-message')
  .map(it => it.data);
export const messageRead$ = () => event$.filter(it => it.kind === 'comment-read')
  .map(it => it.data);
export const messageDelivered$ = () => event$.filter(it => it.kind === 'comment-delivered')
  .map(it => it.data);
