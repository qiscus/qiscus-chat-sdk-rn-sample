import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import xs from "xstream";
import AsyncStorage from "@react-native-community/async-storage";

import * as Qiscus from "qiscus";
import * as Firebase from "utils/firebase";
import p from "utils/p";

import RoomItem from "components/RoomItem";
import Toolbar from "components/Toolbar";

export default class RoomListScreen extends React.Component {
  state = {
    rooms: [],
    avatarURI: null
  };

  componentDidMount() {
    this.setState({
      avatarURI: Qiscus.currentUser().avatar_url
    });
    const subscription = Qiscus.isLogin$()
      .filter(isLogin => isLogin === true)
      .take(1)
      .map(() => xs.from(Qiscus.qiscus.loadRoomList()))
      .flatten()
      .subscribe({
        next: rooms => {
          this.setState({ rooms });
          subscription.unsubscribe();
        }
      });
    this.subscription = Qiscus.newMessage$().subscribe({
      next: message => {
        this._onNewMessage$(message);
      }
    });

    this.subscription2 = Firebase.onNotificationOpened$()
      .debug("notification-opened")
      .subscribe({
        next(data) {
          const notification = data.notification;
          AsyncStorage.setItem(
            "lastNotificationId",
            notification.notificationId
          );

          const roomId = notification.data.qiscus_room_id;
          this.props.navigation.push("Chat", {
            roomId
          });
        }
      });
    Firebase.getInitialNotification().then(async data => {
      if (data == null) return;
      const notification = data.notification;

      const [err, lastNotificationId] = await p(
        AsyncStorage.getItem("lastNotificationId")
      );
      if (err) return console.log("error getting last notif id");

      if (lastNotificationId !== notification.notificationId) {
        AsyncStorage.setItem("lastNotificationId", notification.notificationId);
        const roomId = data.notification.data.qiscus_room_id;
        this.props.navigation.push("Chat", { roomId });
      }
    });
  }

  componentWillUnmount() {
    if (this.subscription) this.subscription.unsubscribe();
    if (this.subscription2) this.subscription2.unsubscribe();
  }

  _onNewMessage$ = message => {
    const roomId = message.room_id;
    const room = this.state.rooms.find(r => r.id === roomId);
    if (room == null) return;
    room.count_notif = (Number(room.count_notif) || 0) + 1;
    room.last_comment_message = message.message;

    const rooms = this.state.rooms.filter(r => r.id !== roomId);
    this.setState({
      rooms: [room, ...rooms]
    });
    return `Success updating room ${room.id}`;
  };

  _openProfile = () => {
    this.props.navigation.push("Profile");
  };
  _onClickRoom = roomId => {
    this.props.navigation.push("Chat", {
      roomId
    });
  };
  _openUserList = () => {
    this.props.navigation.push("UserList");
  };

  render() {
    const avatarURL =
      this.state.avatarURI != null
        ? this.state.avatarURI
        : "https://via.placeholder.com/120x120";
    const { rooms } = this.state;
    return (
      <View style={styles.container}>
        <Toolbar
          title="Conversation"
          renderLeftButton={() => (
            <TouchableOpacity
              style={styles.btnAvatar}
              onPress={this._openProfile}
            >
              <Image style={styles.avatar} source={{ uri: avatarURL }} />
            </TouchableOpacity>
          )}
          renderRightButton={() => (
            <TouchableOpacity
              style={styles.btnAvatar}
              onPress={this._openUserList}
            >
              <Image
                style={styles.iconStartChat}
                source={require("assets/ic_new_chat.png")}
              />
            </TouchableOpacity>
          )}
        />
        <FlatList
          data={rooms}
          keyExtractor={it => `key-${it.id}`}
          renderItem={({ item }) => (
            <RoomItem
              room={item}
              onClick={roomId => this._onClickRoom(roomId)}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  btnAvatar: {
    height: 30,
    width: 30,
    overflow: "hidden",
    backgroundColor: "transparent",
    flex: 0,
    flexShrink: 0,
    flexBasis: 30,
    borderRadius: 50
  },
  iconStartChat: {
    height: 30,
    width: 30,
    resizeMode: "contain"
  },
  avatar: {
    flex: 0,
    flexBasis: 40,
    flexShrink: 0,
    height: 40,
    width: 40,
    borderRadius: 50,
  }
});
