import xs from 'xstream';
// import firebase from 'react-native-firebase';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/messaging';

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
