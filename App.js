import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import firebase from 'react-native-firebase'
import axios from 'axios'

import * as Qiscus from 'qiscus'
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
    Qiscus.isLogin$()
      .filter(it => it === true)
      .subscribe({
        next() {
          console.log('is login')
          firebase.messaging().getToken()
            .then((token) => {
              console.log('token', token)
            })
        }
      })

    fetch('https://api.github.com/users/octocat/orgs', {
      method: 'get'
    })
      .then((res) => {
        console.log('res', res)
      })
      .catch((error) => {
        console.log('error github', error)
      })
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
