import React from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import debounce from 'lodash.debounce';
import * as Qiscus from 'qiscus';
import p from 'utils/p';
import Toolbar from 'components/Toolbar';
import UserItem from 'components/UserItem';


export default class UserListScreen extends React.Component {
  state = {users: []};

  _onUserClick = async (userId) => {
    const [err, room] = await p(Qiscus.qiscus.chatTarget(userId));
    if (err) return console.log('error when getting room', err);

    this.props.navigation.push('Chat', {
      roomId: room.id,
    });
  };

  _onLogin = async () => {
    const [err1, resp] = await p(Qiscus.qiscus.getUsers());
    if (err1) return console.log('Error when getting user list', err1);

    this.setState({users: resp.users});
  };

  _onBack = () => {
    this.props.navigation.goBack();
  };

  _onEndReached = ({ distanceFromEnd }) => {
    console.log('on end reached', distanceFromEnd);
  };

  _onScroll = debounce((offset) => {
    const y = offset.y;
    console.log('y', y);
  }, 300);

  componentDidMount() {
    const subscription = Qiscus.isLogin$()
      .filter(isLogin => isLogin === true)
      .take(1)
      .subscribe({
        next: () => {
          if (subscription && subscription.unsubscribe)
            subscription.unsubscribe();
          this._onLogin()
        }
      });
  }

  _renderItem = (item) => {
    if (item.type === 'load-more') return this._loadMore();
    return <UserItem user={item} onPress={() => this._onUserClick(item.email)} />
  };

  render() {
    const users = this.state.users;
    return (
      <View>
        <Toolbar
          title="Choose Contacts"
          renderLeftButton={() => (
            <TouchableOpacity onPress={this._onBack}>
              <Image source={require('assets/ic_back.png')}/>
            </TouchableOpacity>
          )}
        />
        <FlatList
          data={users}
          keyExtractor={it => `key-${it.email}`}
          onEndReached={this._onEndReached}
          onScroll={(e) => this._onScroll(e.nativeEvent.contentOffset)}
          renderItem={({item}) => this._renderItem(item)}
        />
      </View>
    );
  }
}
