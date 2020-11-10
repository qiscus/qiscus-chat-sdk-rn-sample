import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, Platform, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';

import * as Qiscus from 'qiscus';
import * as Firebase from 'utils/firebase';
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

    const subscription = Firebase.initiate$()
      .map(() => Firebase.createChannel())
      .map(() => Firebase.requestPermission$())
      .compose(flattenConcurrently)
      .map(() => Firebase.onNotification$())
      .compose(flattenConcurrently)
      .map((it) => Firebase.createNotification(it))
      .subscribe({
        next(notification) {
          Firebase.displayNotification(notification);
        },
        error(error) {
          console.log('error initiate firebase', error);
        },
      });

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return (
    <>
      {Platform.OS === 'ios' && <View style={{height: 20}} />}
      <AppContainer
        style={styles.container}
        ref={(ref) => (this.navigation = ref && ref._navigation)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});
