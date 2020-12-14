import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-picker';
import * as Qiscus from 'qiscus';
import toast from 'utils/toast';

import Toolbar from 'components/Toolbar';

export default class ProfileScreen extends React.Component {
  state = {
    isEditing: false,
    name: null,
    userId: null,
    avatarURI: null,
  };

  componentDidMount() {
    const currentUser = Qiscus.currentUser();
    this.setState({
      avatarURI: currentUser.avatar_url,
      name: currentUser.username,
      userId: currentUser.email,
    });
  }

  _onEditAvatar = () => {
    toast('Edit avatar');
    this._getGallery();
  };

  _onSubmitName = (value) => {
    toast(`Submit name "${this.state.name}"`);
    this.setState({isEditing: false});
  };
  _onEditName = () => {
    this.setState(
      {
        isEditing: true,
      },
      () => {
        this.refs.inputName.focus();
      },
    );
  };
  _onChangeName = (text) => {
    this.setState((s) => ({name: text}));
  };

  _getGallery = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Select image',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      },
      (resp) => {
        if (resp.didCancel || resp.error) return;
        const opts = {uri: resp.uri, name: resp.fileName, type: resp.type};
        Qiscus.qiscus.upload(opts, (error, progress, fileURL) => {
          if (error)
            return console.log('error when uploading profile photo', error);
          if (progress) return;
          if (fileURL != null) {
            this.setState({
              avatarURI: fileURL,
            });
            Qiscus.qiscus.userData.avatar_url = fileURL;
            Qiscus.qiscus
              .updateProfile({avatar_url: fileURL})
              .then(() => {
                toast('Success updating avatar');
              })
              .catch(() => {});
          }
        });
      },
    );
  };

  _onLogout = () => {
    AsyncStorage.removeItem('qiscus')
      .then(() => {
        this.props.navigation.replace('Login');
        Qiscus.qiscus.disconnect();
      })
      .catch((error) => {
        console.log('error when trying to logout', error);
      });
  };

  render() {
    const avatarURI = this.state.avatarURI
      ? this.state.avatarURI
      : 'https://via.placeholder.com/500x500';
    return (
      <View style={styles.container}>
        <Toolbar
          title="Profile"
          renderLeftButton={() => (
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                style={styles.icon}
                source={require('assets/ic_back.png')}
              />
            </TouchableOpacity>
          )}
        />

        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <ImageBackground
            style={styles.avatarPreview}
            source={{uri: avatarURI}}>
            <View style={styles.changeAvatarContainer}>
              <TouchableOpacity
                onPress={this._onEditAvatar}
                style={styles.changeAvatarBtn}>
                <Image
                  source={require('assets/ic_image_attachment.png')}
                  style={{height: 35, width: 35}}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoHeader}>Information</Text>

          {/* Display name */}
          <View style={styles.fieldGroup}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('assets/ic_contact.png')}
              />
            </View>
            <TextInput
              editable={this.state.isEditing}
              style={styles.textInput}
              value={this.state.name}
              ref="inputName"
              onChangeText={this._onChangeName}
              onSubmitEditing={this._onSubmitName}
            />
            {!this.state.isEditing && (
              <TouchableOpacity
                style={[styles.iconContainer, styles.editNameBtn]}
                onPress={this._onEditName}>
                <Image
                  style={styles.icon}
                  source={require('assets/ic_edit.png')}
                />
              </TouchableOpacity>
            )}
          </View>

          {/* Username */}
          <View style={styles.fieldGroup}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={require('assets/ic_id.png')} />
            </View>
            <TextInput
              editable={false}
              value={this.state.userId}
              style={styles.textInput}
            />
          </View>

          <View style={[styles.fieldGroup, styles.logoutField]}>
            <TouchableOpacity style={styles.logoutBtn} onPress={this._onLogout}>
              <Image
                style={styles.icon}
                source={require('assets/ic_next.png')}
              />
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  avatarContainer: {
    flexShrink: 0,
    flexGrow: 0,
    flexBasis: 300,
    backgroundColor: 'lightblue',
    overflow: 'hidden',
  },
  avatarPreview: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  changeAvatarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
  },
  changeAvatarBtn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 35,
    width: 35,
  },
  infoContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fafafa',
  },
  infoHeader: {
    flexShrink: 0,
    flexBasis: 46,
    backgroundColor: '#fafafa',
    fontWeight: '600',
    fontSize: 11,
    textTransform: 'uppercase',
    color: '#666',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 10,
  },
  fieldGroup: {
    flexShrink: 0,
    flexGrow: 0,
    flexBasis: 45,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  iconContainer: {
    flexShrink: 0,
    flexGrow: 0,
    flexBasis: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  icon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    marginLeft: 5,
    height: '100%',
  },
  editNameBtn: {
    flex: 0,
    flexShrink: 0,
    flexBasis: 40,
    height: '100%',
    width: 40,
    paddingHorizontal: 10,
  },
  logoutBtn: {
    height: 46,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 16,
    width: '100%',
  },
  logoutText: {
    flex: 1,
    width: '100%',
    color: '#FF3B5E',
    marginLeft: 15,
  },
  logoutField: {
    alignSelf: 'flex-end',
    marginTop: 'auto',
    marginBottom: 0,
  },
});
