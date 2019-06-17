import React from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

export default class UserItem extends React.Component {
  render() {
    const avatarURL = this.props.user.avatar_url;
    const username = this.props.user.username;
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <View
          style={{
            display: 'flex',
            height: 46.5,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}
        >
          <Image
            source={{uri: avatarURL}}
            style={{
              flex: 0,
              flexBasis: 30,
              resizeMode: 'cover',
              borderRadius: 50,
              width: 30,
              height: 30,
            }}
          />
          <View style={{
            flex: 1,
            marginLeft: 10,
            fontSize: 14,
            color: '#2c2c36',
            borderBottomWidth: 1,
            borderBottomColor: '#ececec',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <Text>{username}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
