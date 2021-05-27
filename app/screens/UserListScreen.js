import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import css from "css-to-rn.macro";
import * as Qiscus from "qiscus";
import p from "utils/p";
import Toolbar from "components/Toolbar";
import UserItem from "components/UserItem";

export default class UserListScreen extends React.Component {
  state = { users: [] };
  perPage = 100;

  _onUserClick = async userId => {
    const [err, room] = await p(Qiscus.qiscus.chatTarget(userId));
    if (err) return console.log("error when getting room", err);

    this.props.navigation.push("Chat", {
      roomId: room.id
    });
  };

  _loadUsers = (query = null) => {
    Qiscus.qiscus
      .getUsers(query, 1, this.perPage)
      .then(resp => {
        this.setState({ users: resp.users });
      })
      .catch(error => {
        console.log("Error when getting user list", error);
      });
  };

  _onBack = () => {
    this.props.navigation.goBack();
  };

  _onEndReached = ({ distanceFromEnd }) => {
    // console.log("on end reached", distanceFromEnd);
  };

  componentDidMount() {
    const subscription = Qiscus.isLogin$()
      .take(1)
      .subscribe({
        next: () => {
          if (subscription && subscription.unsubscribe)
            subscription.unsubscribe();
          this._loadUsers();
        }
      });
  }

  _renderItem = item => {
    if (item.type === "load-more") return this._loadMore();
    return (
      <UserItem user={item} onPress={() => this._onUserClick(item.email)} />
    );
  };

  render() {
    const users = this.state.users;
    return (
      <View style={styles.container}>
        <Toolbar
          title="Choose Contacts"
          renderLeftButton={() => (
            <TouchableOpacity onPress={this._onBack}>
              <Image source={require("assets/ic_back.png")} />
            </TouchableOpacity>
          )}
        />
        <View>
          <TouchableOpacity
            style={styles.createGroupBtn}
            onPress={this._onCreateGroup}
          >
            <Image
              style={styles.createGroupIcon}
              source={require("assets/ic_new_chat-group.png")}
            />
            <Text style={styles.createGroupBtnText}>Create Group Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.createGroupBtn}
              onPress={this._onCreateChannel}
          >
            <Image
                style={styles.createGroupIcon}
                source={require("assets/ic_new_chat-group.png")}
            />
            <Text style={styles.createGroupBtnText}>Create Channel</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator}>
          <Text style={styles.separatorText}>Contact</Text>
        </View>
        <FlatList
          data={users}
          keyExtractor={it => `key-${it.email}`}
          onEndReached={this._onEndReached}
          renderItem={({ item }) => this._renderItem(item)}
        />
      </View>
    );
  }

  _onCreateGroup = () => {
    this.props.navigation.navigate("CreateGroup");
  };

  _onCreateChannel = () => {
    this.props.navigation.navigate("CreateChannel");
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
