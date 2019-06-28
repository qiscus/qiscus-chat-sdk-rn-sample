import React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  StatusBar
} from "react-native";
import ImagePicker from "react-native-image-picker";
import toast from "utils/toast";
import p from "utils/p";

import * as Qiscus from "qiscus";
import Toolbar from "components/Toolbar";
import MessageList from "components/MessageList";
import Form from "components/Form";
import Empty from "components/EmptyChat";

export default class ChatScreen extends React.Component {
  state = {
    room: null,
    messages: {},
    isLoadMoreable: true
  };

  componentDidMount() {
    const roomId = this.props.navigation.getParam("roomId", null);
    if (roomId == null) return this.props.navigation.replace("RoomList");
    Qiscus.isLogin$()
      .filter(isLogin => isLogin === true)
      .take(1)
      .subscribe({
        next: async () => {
          const [err1, room] = await p(Qiscus.qiscus.getRoomById(roomId));
          if (err1) console.log("error when getting room", err1);
          this.setState({ room });

          const [err2, messages] = await p(Qiscus.qiscus.loadComments(roomId));
          if (err2) console.log("error when getting messages", err2);

          const message = messages[0] || {};
          const isLoadMoreable = message.comment_before_id !== 0;
          const formattedMessages = messages.reduce((result, message) => {
            result[message.unique_temp_id] = message;
            return result;
          }, {});
          this.setState({
            messages: formattedMessages,
            isLoadMoreable
          });
        }
      });

    this.subscription1 = Qiscus.newMessage$().subscribe({
      next: message => this._onNewMessage(message)
    });
    this.subscription2 = Qiscus.messageRead$().subscribe({
      next: data => this._onMessageRead(data)
    });
    this.subscription3 = Qiscus.messageDelivered$().subscribe({
      next: data => this._onMessageDelivered(data)
    });
  }

  componentWillUnmount() {
    Qiscus.qiscus.exitChatRoom();
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    this.subscription1 && this.subscription1.unsubscribe();
    this.subscription2 && this.subscription2.unsubscribe();
    this.subscription3 && this.subscription3.unsubscribe();
  }

  render() {
    const { room } = this.state;
    const messages = this.messages;
    const roomName = room ? room.name : "Chat";
    const avatarURL = room ? room.avatar : null;

    return (
      <View
        style={styles.container}
        keyboardVerticalOffset={StatusBar.currentHeight}
        behavior="padding"
        enabled
      >
        <Toolbar
          title={roomName}
          onPress={this._onToolbarClick}
          renderLeftButton={() => (
            <TouchableOpacity
              onPress={() => this.props.navigation.replace("RoomList")}
              style={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              <Image
                source={require("assets/ic_back.png")}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: "contain"
                }}
              />
              <Image
                source={{ uri: avatarURL }}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: "cover",
                  borderRadius: 50,
                  marginLeft: 10
                }}
              />
            </TouchableOpacity>
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
    );
  }

  _onNewMessage = message => {
    this.setState(state => ({
      messages: {
        ...state.messages,
        [message.unique_temp_id]: message
      }
    }));
    return "New message";
  };

  _onMessageRead = ({ comment }) => {
    toast("message read");
    const date = new Date(comment.timestamp);
    const results = this.messages
      .filter(it => new Date(it.timestamp) <= date)
      .map(it => ({ ...it, status: "read" }));

    const messages = results.reduce((result, item) => {
      const uniqueId = item.unique_id || item.unique_temp_id;
      result[uniqueId] = item;
      return result;
    }, {});
    this.setState(state => ({
      messages: {
        ...state.messages,
        ...messages
      }
    }));
    return "Message read";
  };

  _onMessageDelivered = ({ comment }) => {
    toast("message delivered");

    const date = new Date(comment.timestamp);
    const results = this.messages
      .filter(it => new Date(it.timestamp) <= date && it.status !== "read")
      .map(it => ({ ...it, status: "delivered" }));

    const messages = results.reduce((result, item) => {
      const uniqueId = item.unique_id || item.unique_temp_id;
      result[uniqueId] = item;
      return result;
    }, {});

    this.setState(state => ({
      messages: {
        ...state.messages,
        ...messages
      }
    }));
    return "Message delivered";
  };

  _prepareMessage = message => {
    const date = new Date();
    return {
      id: date.getTime(),
      uniqueId: "" + date.getTime(),
      unique_temp_id: "" + date.getTime(),
      timestamp: date.getTime(),
      type: "text",
      status: "sending",
      message: message,
      email: Qiscus.currentUser().email
    };
  };

  _prepareFileMessage = (message, fileURI) => {
    return {
      ...this._prepareMessage(message),
      type: "upload",
      fileURI
    };
  };

  _submitMessage = async text => {
    const message = this._prepareMessage(text);
    await this._addMessage(message, true);
    const resp = await Qiscus.qiscus.sendComment(
      this.state.room.id,
      text,
      message.unique_temp_id
    );
    this._updateMessage(message, resp);
    toast("Success sending message!");
  };

  _onSelectFile = () => {
    ImagePicker.showImagePicker(
      {
        title: "Select image",
        storageOptions: {
          skipBackup: true,
          path: "images"
        }
      },
      resp => {
        if (resp.didCancel) return console.log("user cancel");
        if (resp.error)
          return console.log("error when getting file", resp.error);

        const message = this._prepareFileMessage("File attachment", resp.uri);
        this._addMessage(message, true)
          .then(() => {
            const name = resp.name;
            const obj = {
              uri: resp.uri,
              type: resp.type,
              name: resp.fileName
            };

            return Qiscus.qiscus.upload(obj, (error, progress, fileURL) => {
              if (error) return console.log("error when uploading", error);
              if (progress) return console.log(progress.percent);
              if (fileURL != null) {
                const payload = JSON.stringify({
                  type: "image",
                  content: {
                    url: fileURL,
                    file_name: name,
                    caption: ""
                  }
                });
                Qiscus.qiscus
                  .sendComment(
                    this.state.room.id,
                    message.message,
                    message.uniqueId,
                    "custom", // message type
                    payload
                  )
                  .then(resp => {});
              }
            });
          })
          .catch(error => {
            console.log("Catch me if you can", error);
          });
      }
    );
  };

  _addMessage = (message, scroll = false) =>
    new Promise(resolve => {
      this.setState(
        state => ({
          messages: {
            ...state.messages,
            [message.unique_temp_id]: message
          },
          scroll
        }),
        () => {
          if (scroll === false) return;
          const timeoutId = setTimeout(() => {
            this.setState({ scroll: false }, () => {
              clearTimeout(timeoutId);
              resolve();
            });
          }, 400);
        }
      );
    });

  _updateMessage = (message, newMessage) => {
    this.setState(state => ({
      messages: {
        ...state.messages,
        [message.unique_temp_id]: newMessage
      }
    }));
  };

  _loadMore = () => {
    if (!this.state.isLoadMoreable) return;
    const roomId = this.props.navigation.getParam("roomId", null);
    if (roomId == null) return;

    const lastCommentId = this.messages[0].id;
    toast(`Loading more message ${lastCommentId}`);

    Qiscus.qiscus
      .loadComments(roomId, { last_comment_id: lastCommentId })
      .then(messages => {
        toast("Done loading message");
        const isLoadMoreable = messages[0].comment_before_id !== 0;
        this.setState(state => ({
          messages: {
            ...state.messages,
            ...messages.reduce(
              (result, item) => ((result[item.unique_temp_id] = item), result),
              {}
            )
          },
          isLoadMoreable
        }));
      })
      .catch(error => console.log("Error when loading more comment", error));
  };

  _sortMessage = messages =>
    messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  _onToolbarClick = () => {
    const roomId = this.state.room.id;
    this.props.navigation.navigate("RoomInfo", { roomId });
  };

  get messages() {
    return this._sortMessage(Object.values(this.state.messages));
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fafafa",
    height: "100%",
    width: "100%"
  }
});
