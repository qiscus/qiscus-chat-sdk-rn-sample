import { ToastAndroid, Alert, Platform } from 'react-native';

export default function toast(msg) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else if (Platform.OS === 'ios') {
    Alert.alert('Info', msg);
  }
}
