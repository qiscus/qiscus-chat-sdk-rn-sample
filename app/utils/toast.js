import {ToastAndroid} from 'react-native';
import {Platform} from 'react-native'

export default function toast(msg) {
  if (Platform.OS === 'android') ToastAndroid.show(msg, ToastAndroid.SHORT);
}
