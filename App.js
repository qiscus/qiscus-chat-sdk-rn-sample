import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, Platform, View, SafeAreaView} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';

import * as Qiscus from 'qiscus';
// import * as Firebase from 'utils/firebase';
import firebase from '@react-native-firebase/app'
import messaging from '@react-native-firebase/messaging'
import PushNotification from 'react-native-push-notification'
import {LoginPage as LoginScreen} from 'screens/LoginScreen';
import ProfileScreen from 'screens/ProfileScreen';
import RoomListScreen from 'screens/RoomListScreen';
import ChatScreen from 'screens/ChatScreen';
import UserListScreen from 'screens/UserListScreen';
import CreateGroupScreen from 'screens/CreateGroupScreen';
import RoomInfoScreen from 'screens/RoomInfo';
import flattenConcurrently from 'xstream/extra/flattenConcurrently';

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Profile: ProfileScreen,
    RoomList: RoomListScreen,
    Chat: ChatScreen,
    UserList: UserListScreen,
    CreateGroup: CreateGroupScreen,
    RoomInfo: RoomInfoScreen,
  },
  {headerMode: 'none', initialRouteName: 'Login'},
);
const AppContainer = createAppContainer(AppNavigator);

export default function Application(props) {
  const storage = useAsyncStorage('qiscus');
  useEffect(() => {
    Qiscus.init();
    storage.getItem().then(
      (res) => {
        if (res == null) return;

        const data = JSON.parse(res);
        Qiscus.qiscus.setUserWithIdentityToken({user: data});
      },
      (error) => {
        console.log('error getting login data', error);
      },
    );
  }, []);

  useEffect(() => {
    if (!messaging().hasPermission()) {
      messaging().requestPermission()
    }

    // firebase.initializeApp()
    PushNotification.channelExists('general', (exists) => {
      if (!exists) {
        PushNotification.createChannel({
          channelId: 'general',
          channelName: 'General'
        }, (created) => {
          console.log('channel created', created)
        })
      }
    });

    messaging().onMessage(async (message) => {
      console.log('@fcm.message', message)
      let payload = JSON.parse(message.data.payload)
      console.log('payload:', payload)
      PushNotification.localNotification({
        message: payload.message,
        allowWhileIdle: true,
        channelId: 'general',
        title: 'New message',
      })
    })
  }, [])

  return (
    <>
      {/* {Platform.OS === 'ios' && <View style={{height: 20}} />} */}
      <SafeAreaView style={styles.safeAreaView}>
        <AppContainer
          style={styles.container}
          ref={(ref) => (this.navigation = ref && ref._navigation)}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  safeAreaView: {
    flex: 1,
  },
});
