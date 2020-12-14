//@ts-check
import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import isSameDay from 'date-fns/isSameDay';
import format from 'date-fns/format';
import {parseISO} from 'date-fns';

import * as Qiscus from '../qiscus';

export default class RoomItem extends React.PureComponent {
  getTime = (time) => {
    if (isSameDay(time, new Date())) {
      return format(time, 'HH:mm');
    }
    return format(time, 'dd/MM/yyyy');
  };

  _onClick = (roomId) => {
    this.props.onClick && this.props.onClick(roomId);
  };

  render() {
    /** @type import('qiscus-sdk-javascript/typings/model').IQChatRoom */
    const room = this.props.room;
    const lastComment = room.lastMessage.text.startsWith('[file]')
      ? 'File attachment'
      : room.lastMessage.text;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this._onClick(room.id)}>
        <Image style={styles.avatar} source={{uri: room.avatarUrl}} />
        <View style={styles.dataContainer}>
          <View style={styles.content}>
            <Text style={styles.name}>{room.name}</Text>
            <Text style={styles.lastMessage}>{lastComment}</Text>
          </View>
          <View style={styles.meta}>
            <Text style={styles.time}>
              {this.getTime(room.lastMessage.timestamp)}
            </Text>
            {room.unreadCount > 0 && (
              <Text style={styles.unreadCount}>{room.unreadCount}</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  avatar: {
    flex: 0,
    flexBasis: 40,
    flexShrink: 0,
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  dataContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
    marginLeft: 10,
    paddingBottom: 16,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    color: '#2c2c36',
  },
  lastMessage: {
    fontSize: 11,
    color: '#979797',
    maxWidth: 175,
  },
  meta: {
    flex: 0,
    flexBasis: 55,
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  time: {
    fontSize: 10,
    textAlign: 'right',
    color: '#979797',
  },
  unreadCount: {
    fontSize: 10,
    color: 'white',
    backgroundColor: '#94ca62',
    borderRadius: 50,
    minWidth: 14,
    textAlign: 'center',
    marginTop: 5,
  },
});
