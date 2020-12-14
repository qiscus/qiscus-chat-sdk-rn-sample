//@ts-check
import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import css from 'css-to-rn.macro';
import debounce from 'lodash.debounce';
import xs from 'xstream';
import * as dateFns from 'date-fns';
import toast from '../utils/toast';

import * as Qiscus from '../qiscus';
import Toolbar from '../components/Toolbar';
import MessageList from '../components/MessageList';
import Form from '../components/Form';
import Empty from '../components/EmptyChat';

export default class ChatScreen extends React.Component {
  state = {
    /** @type import('qiscus-sdk-javascript/typings/model').IQChatRoom */
    room: null,
    /** @type Record<string, import('qiscus-sdk-javascript/typings/model').IQMessage> */
    messages: {},
    isLoadMoreable: true,
    isOnline: false,
    isTyping: false,
    /** @type Date */
    lastOnline: null,
    /** @type string */
    typingUsername: null,
  };

  async componentDidMount() {
    const roomId = this.props.navigation.getParam('roomId', null);
    if (roomId == null) return this.props.navigation.replace('RoomList');

    const [room, messages] = await Qiscus.q.getChatRoomWithMessages(roomId);
    console.log('room:', room, 'messages:', messages);
    const isLoadMoreable = messages[0]?.previousMessageId !== -1;
    this.setState({
      isLoadMoreable,
      room,
      messages: messages.reduce((res, m) => {
        res[m.uniqueId] = m;
        return res;
      }, {}),
    });

    const subs1 = Qiscus.q.onMessageReceived(this._onNewMessage);
    const subs2 = Qiscus.q.onMessageRead(this._onMessageRead);
    const subs3 = Qiscus.q.onMessageDelivered(this._onMessageDelivered);
    const subs4 = Qiscus.q.onMessageDeleted((message) => {
      console.log('@deleted', message);
    });
    const subs5 = Qiscus.q.onUserTyping((userId, roomId, isTyping) => {
      this._onTyping({name: userId});
    });
    const subs6 = Qiscus.q.onUserOnlinePresence(
      (userId, isOnline, lastSeen) => {
        this._onOnline({userId, isOnline, lastSeen});
      },
    );
    this.subscriptions = [subs1, subs2, subs3, subs4, subs5, subs6];

    // this.subscription = xs
    //   .merge(
    //     Qiscus.newMessage$().map(this._onNewMessage),
    //     Qiscus.messageRead$().map(this._onMessageRead),
    //     Qiscus.messageDelivered$().map(this._onMessageDelivered),
    //     Qiscus.onlinePresence$().map(this._onOnline),
    //     Qiscus.typing$()
    //       .filter((it) => Number(it.room_id) === this.state.room.id)
    //       .map(this._onTyping),
    //   )
    //   .subscribe({
    //     next: () => {},
    //     error: (error) => console.log('subscription error', error),
    //   });
  }

  componentWillUnmount() {
    if (this.state.room != null) Qiscus.q.unsubscribeChatRoom(this.state.room);
    this.subscriptions?.forEach((it) => it?.());
  }

  render() {
    const {room, isTyping, isOnline, lastOnline, typingUsername} = this.state;
    const messages = this.messages;
    const roomName = room ? room.name : 'Chat';
    const avatarURL = room ? room.avatarUrl : null;

    const showTyping = room != null && !this.isGroup && isTyping;

    return (
      <View
      // keyboardVerticalOffset={StatusBar.currentHeight}
      // behavior="padding"
      // enabled
      >
        <View style={styles.container}>
          <Toolbar
            title={<Text style={styles.titleText}>{roomName}</Text>}
            onPress={this._onToolbarClick}
            renderLeftButton={() => (
              <TouchableOpacity
                onPress={() => this.props.navigation.replace('RoomList')}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flex: 0,
                }}>
                <Image
                  // @ts-ignore
                  source={require('../../assets/ic_back.png')}
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                  }}
                />
                <Image
                  source={{uri: avatarURL}}
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'cover',
                    borderRadius: 50,
                    marginLeft: 10,
                  }}
                />
              </TouchableOpacity>
            )}
            renderMeta={() => (
              <View style={styles.onlineStatus}>
                {this._renderOnlineStatus()}
                {showTyping && (
                  <Text style={styles.typingText}>
                    {typingUsername} is typing...
                  </Text>
                )}
                {this.isGroup && (
                  <Text style={styles.typingText} numberOfLines={1}>
                    {this.participants}
                  </Text>
                )}
              </View>
            )}
          />

          {messages.length === 0 && <Empty />}
          {messages.length > 0 && (
            <MessageList
              isLoadMoreable={this.state.isLoadMoreable}
              messages={messages}
              scroll={this.state.scroll}
              onLoadMore={this._loadMore}
            />
          )}

          <Form
            onSubmit={this._submitMessage}
            onSelectFile={this._onSelectFile}
          />
        </View>
      </View>
    );
  }

  _renderOnlineStatus = () => {
    const {isGroup} = this;
    const {isTyping, isOnline, lastOnline, room} = this.state;
    if (room == null) return;
    if (isGroup || isTyping) return;

    const lastOnlineText = dateFns.isSameDay(lastOnline, new Date())
      ? dateFns.format(lastOnline, 'hh:mm')
      : '';

    return (
      <>
        {isOnline && <Text style={styles.onlineStatusText}>Online</Text>}
        {!isOnline && <Text style={styles.typingText}>{lastOnlineText}</Text>}
      </>
    );
  };

  /**
   * @param {object} opts
   * @param {string} opts.name
   * @param {boolean} opts.isTyping
   */
  _onTyping = debounce(({name}) => {
    this.setState(
      {
        isTyping: true,
        typingUsername: name,
      },
      () => {
        setTimeout(
          () =>
            this.setState({
              isTyping: false,
              typingUsername: null,
            }),
          850,
        );
      },
    );
  }, 300);

  /**
   * @param {object} data
   * @param {string} data.userId
   * @param {boolean} data.isOnline
   * @param {Date} data.lastSeen
   */
  _onOnline = (data) => {
    this.setState({
      isOnline: data.isOnline,
      lastOnline: data.lastSeen,
    });
    return ['Online presence', data];
  };

  /**
   * @param {IQMessage} message
   */
  _onNewMessage = (message) => {
    this.setState((state) => ({
      messages: {
        ...state.messages,
        [message.uniqueId]: message,
      },
    }));
    return 'New message';
  };

  /** @param {IQMessage} message */
  _onMessageRead = (message) => {
    toast('message read');
    // const date = new Date(comment.timestamp);
    const results = this.messages
      // .filter(it => new Date(it.timestamp) <= date)
      .filter((it) => it.timestamp <= message.timestamp)
      .map((it) => ({...it, status: 'read'}));

    const messages = results.reduce((result, item) => {
      const uniqueId = item.uniqueId;
      result[uniqueId] = item;
      return result;
    }, {});
    this.setState((state) => ({
      messages: {
        ...state.messages,
        ...messages,
      },
    }));
    return 'Message read';
  };

  /** @param {IQMessage} message */
  _onMessageDelivered = (message) => {
    toast('message delivered');

    const results = this.messages
      .filter((it) => it.timestamp <= message.timestamp && it.status !== 'read')
      .map((it) => ({...it, status: 'delivered'}));

    const messages = results.reduce((result, item) => {
      const uniqueId = item.uniqueId;
      result[uniqueId] = item;
      return result;
    }, {});

    this.setState((state) => ({
      messages: {
        ...state.messages,
        ...messages,
      },
    }));
    return 'Message delivered';
  };

  /**
   * @param {string} message
   */
  _prepareMessage = (message) => {
    const date = new Date();

    const m = Qiscus.q.generateMessage({
      roomId: this.state.room.id,
      text: message,
      extras: {},
    });

    return m;
  };

  /** @param {string} text */
  _submitMessage = async (text) => {
    const message = this._prepareMessage(text);
    await this._addMessage(message, true);

    const m = await Qiscus.q.sendMessage(message);

    this._updateMessage(message, m);
    toast('Success sending message!');
  };

  _onSelectFile = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Select image',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      },
      (resp) => {
        if (resp.didCancel) return console.log('user cancel');
        if (resp.error)
          return console.log('error when getting file', resp.error);

        // const message = this._prepareFileMessage('File attachment', resp.uri);

        const message = Qiscus.q.generateFileAttachmentMessage({
          roomId: this.state.room.id,
          caption: 'File attachment',
          text: 'File attachment',
          filename: resp.fileName,
          size: resp.fileSize,
          extras: {},
          url: resp.uri,
        });

        this._addMessage(message, true)
          .then(() => {
            const name = resp.fileName;
            const obj = {
              uri: resp.uri,
              type: resp.type,
              name: resp.fileName,
            };

            return new Promise((resolve, reject) => {
              // @ts-ignore
              Qiscus.q.sendFileMessage(message, obj, (error, progress, m) => {
                if (error) {
                  reject(error);
                  return console.log('error when uploading', error);
                }
                if (progress) return console.log('progress', progress);
                if (m != null) {
                  resolve(m);
                  this._updateMessage(message, m);
                }
              });
            });
          })
          .catch((error) => {
            console.log('Catch me if you can', error);
          });
      },
    );
  };

  /**
   * @param {IQMessage} message
   * @returns {Promise<void>}
   */
  _addMessage = (message, scroll = false) =>
    new Promise((resolve) => {
      this.setState(
        (state) => ({
          messages: {
            ...state.messages,
            [message.uniqueId]: message,
          },
          scroll,
        }),
        () => {
          if (scroll === false) return;
          const timeoutId = setTimeout(() => {
            this.setState({scroll: false}, () => {
              clearTimeout(timeoutId);
              resolve();
            });
          }, 400);
        },
      );
    });

  /** @typedef {import('qiscus-sdk-javascript/typings/model').IQMessage} IQMessage
   * @param {IQMessage} message
   * @param {IQMessage} newMessage
   */
  _updateMessage = (message, newMessage) => {
    this.setState((state) => ({
      messages: {
        ...state.messages,
        [message.uniqueId]: newMessage,
      },
    }));
  };

  _loadMore = () => {
    if (this.messages.length <= 0) return;
    if (!this.state.isLoadMoreable) return;
    /** @type string */
    const roomId = this.props.navigation.getParam('roomId', null);
    if (roomId == null) return;

    const lastCommentId = this.messages[0].id;
    toast(`Loading more message ${lastCommentId}`);

    Qiscus.q
      .getPreviousMessagesById(parseInt(roomId), 20, lastCommentId)
      .then((messages) => {
        toast('Done loading message');
        const isLoadMoreable = messages[0].previousMessageId !== 0;

        this.setState((state) => ({
          messages: {
            ...state.messages,
            ...messages.reduce(
              (result, item) => ((result[item.uniqueId] = item), result),
              {},
            ),
          },
          isLoadMoreable,
        }));
      });
  };

  /** @param {import('qiscus-sdk-javascript/typings/model').IQMessage[]} messages */
  _sortMessage = (messages) =>
    messages.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

  _onToolbarClick = () => {
    const roomId = this.state.room.id;
    this.props.navigation.navigate('RoomInfo', {roomId});
  };

  get isGroup() {
    return this.state.room?.type === 'group';
  }

  get participants() {
    const room = this.state.room;
    if (room == null || room.participants == null) return;
    const limit = 3;
    const overflowCount = room.participants.length - limit;
    const participants = room.participants
      .slice(0, limit)
      .map((it) => it.name.split(' ')[0]);
    if (room.participants.length <= limit) return participants.join(', ');
    return participants.concat(`and ${overflowCount} others.`).join(', ');
  }

  get messages() {
    return this._sortMessage(Object.values(this.state.messages));
  }
}

const styles = StyleSheet.create(css`
  .container {
    display: flex;
    align-items: center;
    background-color: #fafafa;
    height: 100%;
    width: 100%;
  }
  .onlineStatus {
  }
  .onlineStatusText {
    font-size: 12px;
    color: #94ca62;
  }
  .typingText {
    font-size: 12px;
    color: #979797;
    overflow: hidden;
  }
  .titleText {
    font-size: 16px;
  }
`);
