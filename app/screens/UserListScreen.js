//@ts-check

import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import css from 'css-to-rn.macro';
import * as Qiscus from '../qiscus';
import p from '../utils/p';
import Toolbar from '../components/Toolbar';
import UserItem from '../components/UserItem';

export default class UserListScreen extends React.Component {
  state = {
    /** @type import('qiscus-sdk-javascript/typings/model').IQUser[] */
    users: [],
  };
  perPage = 100;

  /**
   * @param {string} userId
   */
  _onUserClick = async (userId) => {
    const [err, room] = await p(Qiscus.q.chatUser(userId, {}));
    if (err) return console.log('error when getting room', err);

    this.props.navigation.push('Chat', {
      roomId: room.id,
    });
  };

  _loadUsers = (query = null) => {
    Qiscus.q
      .getUsers(query, 1, this.perPage)
      .then((users) => {
        this.setState({users});
      })
      .catch((error) => {
        console.log('Error when getting user list', error);
      });
  };

  _onBack = () => {
    this.props.navigation.goBack();
  };

  _onEndReached = ({distanceFromEnd}) => {
    // console.log("on end reached", distanceFromEnd);
  };

  componentDidMount() {
    this._loadUsers();
  }

  /**
   * @param {import('qiscus-sdk-javascript/typings/model').IQUser} item
   */
  _renderItem = (item) => {
    // if (item.type === 'load-more') return this._loadMore();
    return <UserItem user={item} onPress={() => this._onUserClick(item.id)} />;
  };

  render() {
    const users = this.state.users;
    return (
      <View style={styles.container}>
        <Toolbar
          title="Choose Contacts"
          renderLeftButton={() => (
            <TouchableOpacity onPress={this._onBack}>
              <Image
                source={require(// @ts-ignore
                'assets/ic_back.png')}
              />
            </TouchableOpacity>
          )}
        />
        <View>
          <TouchableOpacity
            style={styles.createGroupBtn}
            onPress={this._onCreateGroup}>
            <Image
              style={styles.createGroupIcon}
              // @ts-ignore
              source={require('assets/ic_new_chat-group.png')}
            />
            <Text style={styles.createGroupBtnText}>Create Group Chat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator}>
          <Text style={styles.separatorText}>Contact</Text>
        </View>
        <FlatList
          data={users}
          keyExtractor={(it) => `key-${it.id}`}
          onEndReached={this._onEndReached}
          renderItem={({item}) => this._renderItem(item)}
        />
      </View>
    );
  }

  _onCreateGroup = () => {
    this.props.navigation.navigate('CreateGroup');
  };
}

const styles = StyleSheet.create(css`
  .container {
    display: flex;
    height: 100%;
  }
  .createGroupBtn {
    flex: 0 0 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: white;
    border-bottom-width: 1px;
    border-bottom-color: #ececec;
    padding-left: 10px;
  }
  .createGroupBtnText {
    font-size: 14px;
    color: #2c2c36;
    padding: 0 6px;
  }
  .createGroupIcon {
  }
  .separator {
    flex: 0;
    background: #fafafa;
    padding: 5px;
    height: 40px;
    flex-basis: auto;
    justify-content: flex-end;
  }
  .separatorText {
    font-weight: 600;
    font-size: 10px;
    text-transform: uppercase;
    color: #666;
  }
`);
