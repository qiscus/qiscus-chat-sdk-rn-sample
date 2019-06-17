import {ToastAndroid} from 'react-native';

export default function toast(msg) {
  ToastAndroid.show(msg, ToastAndroid.SHORT);
}
