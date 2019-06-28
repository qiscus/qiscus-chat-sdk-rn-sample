import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import css from 'css-to-rn.macro';

export default class SelectedContactItem extends React.PureComponent {
  render() {
    const {contact} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{uri: contact.avatar_url}}/>
          <TouchableOpacity style={styles.remove} onPress={() => this.props.onRemove()}>
            <Image style={styles.icon} source={require('assets/delete.png')}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}
              numberOfLines={1}>
          {contact.name || contact.email}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(css`
  .container {
    display: flex;
    height: 80px;
    width: 50px;
    overflow: hidden;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0 5px;
    padding-top: 5px;
    flex-shrink: 0;
  }
  .avatarContainer {
    width: 40px;
    height: 40px;
    position: relative;
    border-radius: 50px;
    flex-basis: 40px;
  }
  .avatar {
    height: 40px;
    width: 40px;
    resizeMode: cover;
    border-radius: 50px;
    overflow: hidden;
  }
  .remove {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: transparent;
    border: none;
    height: 20px;
    width: 20px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .name {
    font-size: 13px;
    color: #333;
    flex: 0;
    flex-basis: 40px;
    height: 40px;
    overflow: hidden;
    width: 44px;
    text-align: center;
    padding: 0;
  }
`);
