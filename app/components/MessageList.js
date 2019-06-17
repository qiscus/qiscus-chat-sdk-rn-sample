import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import dateFns from 'date-fns';
import debounce from 'lodash.debounce';

import toast from 'utils/toast';
import * as Qiscus from 'qiscus';
import MessageUpload from 'components/MessageUpload';
import MessageCustom from 'components/MessageCustom';

class AnimatedSending extends React.Component {
  animation = new Animated.Value(0);

  componentDidMount() {
    const timing = Animated.timing(this.animation, {
      toValue: 1,
      duration: 2000,
      isInteraction: false,
      useNativeDriver: true,
    });
    Animated.loop(timing).start();
  }

  render() {
    const spin = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <Animated.Image
        source={require('assets/ic_sending.png')}
        style={[styles.iconStatus, {
          transform: [{rotate: spin}],
        }]}
      />
    )
  }
}

export default class MessageList extends React.Component {
  _messageListFormatter = (messages) => {
    const _messages = [];

    for (let i = 0; i < messages.length; i++) {
      const message = messages[i];
      const lastMessage = messages[i - 1];
      const messageDate = new Date(message.timestamp);
      const lastMessageDate = lastMessage == null ? null : new Date(lastMessage.timestamp);
      const isSameDay = dateFns.isSameDay(messageDate, lastMessageDate);
      const showDate = lastMessage != null && !isSameDay;

      const dateMessage = {
        ...message,
        id: `date-${message.id}`,
        type: 'date',
        message: dateFns.format(message.timestamp, 'DD MMM YYYY'),
      };
      if (i === 0 || showDate) _messages.push(dateMessage);
      _messages.push(message);
    }

    return _messages
  };
  _renderMessage = (message) => {
    const type = message.type;
    const isMe = message.email === Qiscus.currentUser().email;
    const isLoadMore = type === 'load-more';
    const isDate = type === 'date';
    const isCustomMessage = type === 'custom' && typeof (message.payload.content) !== 'string';

    const containerStyle = [styles.container];
    if (isMe) containerStyle.push(styles.containerMe);
    if (isDate || isLoadMore) containerStyle.push(styles.containerDate);

    const messageStyle = [styles.message];
    if (isMe) messageStyle.push(styles.messageMe);
    if (isDate || isLoadMore) messageStyle.push(styles.messageDate);

    const textStyle = [styles.messageText];
    if (isDate) textStyle.push(styles.messageTextDate);

    const showMeta = isMe && !isDate && !isLoadMore;

    let content = <Text style={textStyle}>{message.message}</Text>;

    if (type === 'upload') content = this._renderUploadMessage(message);
    if (isCustomMessage && message.payload.type === 'image') content = this._renderCustomImageMessage(message);

    return (
      <View style={containerStyle}>
        {showMeta && this._renderMessageMeta(message)}
        <View style={messageStyle}>
          {isLoadMore && (
            <TouchableWithoutFeedback
              style={textStyle}
              onPress={this.props.onLoadMore}>
              {content}
            </TouchableWithoutFeedback>
          )}
          {!isLoadMore && (
            <View style={textStyle}>{content}</View>
          )}
        </View>
      </View>
    )
  };
  _renderUploadMessage = (message) => (<MessageUpload message={message}/>);
  _renderCustomImageMessage = (message) => (<MessageCustom message={message}/>);
  _renderMessageMeta = (message) => {
    return (
      <View style={styles.metaContainer}>
        <Text style={styles.metaTime}>
          {dateFns.format(message.timestamp, 'HH:mm')}
        </Text>
        {this._renderMessageStatus(message.status)}
      </View>
    );
  };

  _renderMessageStatus = (status) => {
    if (status === 'sending') return <AnimatedSending/>;
    if (status === 'sent') return <Image style={styles.iconStatus} source={require('assets/ic_delivered.png')}/>;
    if (status === 'delivered') return <Image style={styles.iconStatus} source={require('assets/ic_delivered.png')}/>;
    if (status === 'read') return <Image style={styles.iconStatus} source={require('assets/ic_read.png')}/>;
    if (status === 'failed') return <Image style={styles.iconStatus} source={require('assets/failed-send.png')}/>;
  };

  _onEndReached = (distance) => {};

  _onScroll = debounce((distance) => {
    console.log('scroll', distance)
  }, 300);

  _scroll = () => {
    if (this.$flatList != null) {
      this.$flatList.scrollToOffset({ offset: this.props.messages.length * 100 });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const isMessagesChanged = this.props.messages.length !== prevProps.messages.length;
    if (this.$flatList != null && this.props.scroll && isMessagesChanged) {
      toast('scroll!');
      setTimeout(() => this._scroll(), 1000);
    }
  }

  get messages() {
    return this._messageListFormatter(this.props.messages);
  }

  get loadMoreMessage() {
    const id = 0x1011;
    return {
      type: 'load-more',
      message: 'Load more',
      id,
      unique_id: id,
      unique_temp_id: id,
    }
  }

  render() {
    const messages = this.messages;
    const items = [
      this.props.isLoadMoreable ? this.loadMoreMessage : null,
      ...messages,
    ].filter(it => it != null);


    return (
      <FlatList
        ref={ref => this.$flatList = ref}
        data={items}
        keyExtractor={it => `key-${it.id}`}
        renderItem={({item}) => this._renderMessage(item)}
        getItemLayout={(data, index) => {
          let length = 80;
          if (data.type === 'custom' && data.payload.type === 'image') length = 200;
          return ({length: length, offset: 0, index: index})
        }}
        onEndReached={(distance) => this._onEndReached(distance.distanceFromEnd)}
        onScroll={(event) => this._onScroll(event.nativeEvent.contentOffset.y)}
        style={{
          width: '100%',
          height: '100%',
        }}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  containerMe: {
    justifyContent: 'flex-end',
  },
  containerDate: {
    justifyContent: 'center',
  },

  message: {
    minWidth: 100,
    maxWidth: 350,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#e8e8e8',
    shadowColor: '#c7c7c7',
    shadowOpacity: 0.8,
    shadowOffset: {width: 0, height: 7},
    shadowRadius: 16,
  },
  messageMe: {
    backgroundColor: 'white',
  },
  messageDate: {
    backgroundColor: '#94c162',
    color: 'white',
    padding: 5,
    minWidth: 0,
  },
  messageText: {
    fontSize: 13,
    lineHeight: 23,
    color: '#666',
  },
  messageTextDate: {
    color: 'white',
  },

  metaContainer: {
    marginHorizontal: 5,
  },
  metaTime: {
    fontSize: 10,
    lineHeight: 14,
    color: '#979797',
  },

  iconStatus: {
    height: 15,
    width: 15,
    padding: 1,
    resizeMode: 'center',
  },
});
