import xs from 'xstream';
import firebase from 'react-native-firebase';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/messaging';
import {Platform} from 'react-native';

import * as Qiscus from 'qiscus';

const getToken = () => firebase.messaging().getToken();
export const getToken$ = () => xs.from(getToken());

export const initiate$ = () =>
  Qiscus.isLogin$()
    .map(() => getToken$())
    .flatten()
    .take(1)
    .map((token) => xs.from(Qiscus.setDeviceToken(token)))
    .flatten();

async function requestPermission() {
  const enabled = await firebase.messaging().hasPermission();
  if (!enabled) {
    await firebase.messaging().requestPermission();
  }
}

export function createChannel() {
  if (Platform.OS === 'android') {
    const channel = new firebase.notifications.Android.Channel(
      'test-channel',
      'Test Channel',
      firebase.notifications.Android.Importance.Max,
    ).setDescription('My apps test channel');
    firebase.notifications().android.createChannel(channel);
  }
}

export const onNotification$ = () =>
  xs.create({
    listener: null,
    start(listener) {
      this.listener = firebase
        .notifications()
        .onNotification((notification) => {
          listener.next(notification);
        });
    },
    stop() {
      if (this.listener != null) this.listener();
    },
  });
export const onNotificationDisplayed$ = () =>
  xs.create({
    listener: null,
    start(listener) {
      this.listener = firebase
        .notifications()
        .onNotificationDisplayed((notification) => {
          listener.next(notification);
        });
    },
    stop() {
      if (this.listener != null) this.listener();
    },
  });
export const onNotificationOpened$ = () =>
  xs.create({
    listener: null,
    start(listener) {
      this.listener = firebase
        .notifications()
        .onNotificationOpened((notification) => {
          listener.next(notification);
        });
    },
    stop() {
      if (this.listener != null) this.listener();
    },
  });
export const createNotification = (notif) => {
  const notification = new firebase.notifications.Notification()
    .setNotificationId(notif.notificationId)
    .setTitle(notif.title)
    .setBody(notif.body)
    .setData(notif.data);
  if (Platform.OS === 'android') {
    notification.android
      .setChannelId('test-channel')
      .android.setSmallIcon('ic_launcher');
  }

  return notification;
};
export const requestPermission$ = () => xs.from(requestPermission());

export const displayNotification = (notification) =>
  firebase.notifications().displayNotification(notification);
export const getInitialNotification = () =>
  firebase.notifications().getInitialNotification();

export function start(onDestroy) {
  requestPermission();
  createChannel();

  // const listener2 = firebase.notifications().onNotification((notif) => {
  //   const notification = new firebase.notifications.Notification()
  //     .setNotificationId(notif.notificationId)
  //     .setTitle(notif.title)
  //     .setBody(notif.body)
  //     .setData(notif.data);

  //   if (Platform.OS === 'android') {
  //     notification.android
  //       .setChannelId('test-channel')
  //       .android.setSmallIcon('ic_launcher');
  //   }

  //   firebase.notifications().displayNotification(notification);
  // });
  // const listener3 = firebase
  //   .notifications()
  //   .onNotificationOpened((notification) => {});
}
