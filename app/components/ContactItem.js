//@ts-check
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

export default class ContactItem extends React.Component {
  render() {
    /** @type import("qiscus-sdk-javascript/typings/model").IQUser */
    const contact = this.props.contact;
    console.log('contact', contact);

    return (
      <TouchableOpacity style={styles.contactItem} onPress={this._onSelect}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{uri: contact.avatarUrl}} />
        </View>
        <TouchableOpacity
          style={styles.detailContainer}
          onPress={this._onSelect}>
          <Text style={styles.text}>{contact.name || contact.id}</Text>
          {this.props.renderButton && this.props.renderButton()}
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  _onSelect = () => {
    if (this.props.onSelect != null) this.props.onSelect();
  };
}

const styles = StyleSheet.create({
  contactItem: {
    display: 'flex',
    flex: 0,
    flexDirection: 'row',
    flexBasis: 45,
    height: 45,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  avatarContainer: {
    flex: 0,
    flexBasis: 30,
    height: 30,
    width: 30,
    resizeMode: 'cover',
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  avatar: {
    flex: 1,
    height: 30,
    width: 30,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  detailContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    marginLeft: 10,
    height: 60,
    fontSize: 14,
    color: '#2c2c36',
  },
  text: {
    flex: 1,
  },
});
