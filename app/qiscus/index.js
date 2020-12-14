// @ts-check
import xs from 'xstream';
import mitt from 'mitt';
import Qiscus from 'qiscus-sdk-javascript';

export const q = new Qiscus();

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

export async function init() {
  console.log('initiate qiscus');
  await q.setup(appId);
}

export const currentUser = () => q.currentUser;

export const isLogin$ = () => {
  return xs
    .periodic(300)
    .map(() => q.isLogin)
    .compose(distinct)
    .filter((it) => it === true);
};
