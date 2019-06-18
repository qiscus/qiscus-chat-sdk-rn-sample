import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import * as Qiscus from 'qiscus'
import * as Firebase from 'utils/firebase'
import LoginScreen from 'screens/LoginScreen'
import ProfileScreen from 'screens/ProfileScreen'
import RoomListScreen from 'screens/RoomListScreen'
import ChatScreen from 'screens/ChatScreen'
import UserListScreen from 'screens/UserListScreen'

const AppNavigator = createStackNavigator({
  Login: LoginScreen,
  Profile: ProfileScreen,
  RoomList: RoomListScreen,
  Chat: ChatScreen,
  UserList: UserListScreen,
}, { headerMode: 'none', initialRouteName: 'Login' })
const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  componentDidMount() {
    Qiscus.init()
    Firebase.initiate$()
      .map(() => Firebase.createChannel())
      .map(() => Firebase.requestPermission$()).flatten()
      .map(() => Firebase.onNotification$()).flatten()
      .map((notif) => Firebase.createNotification(notif))
      .subscribe({
        next: (notif) => {
          Firebase.displayNotification(notif)
        },
        error: (error) => console.log('error initiate firebase', error)
      })
  }

  componentWillUnmount() {
    if (this.stop != null) {
      this.stop()
    }
  }
  render() {
    return (
      <>
        <AppContainer style={styles.container} />
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight
  }
})
