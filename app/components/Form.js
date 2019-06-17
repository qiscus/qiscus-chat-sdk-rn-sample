import React from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class Form extends React.Component {
  state = {message: ''};

  _onChangeMessage = (text) => this.setState({message: text});
  _onSubmit = () => {
    const message = this.state.message;
    this.props.onSubmit(message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.formButton}
          onPress={this.props.onSelectFile}>
          <Image style={styles.formIcon}
                 source={require('assets/ic_attachment.png')}/>
        </TouchableOpacity>
        <TextInput style={styles.formTextField}
                   placeholder="Type your message"
                   returnKeyType="send"
                   value={this.state.message}
                   onChangeText={this._onChangeMessage}
                   onSubmitEditing={this._onSubmit}
        />
        <TouchableOpacity onPress={this._onSubmit}
                          style={styles.formButton}>
          <Image style={styles.formIcon}
                 source={require('assets/ic_send.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0,
    flexShrink: 0,
    flexGrow: 0,
    width: '100%',
    backgroundColor: 'white',
    height: 48,
    borderTopWidth: 0.5,
    borderColor: '#e8e8e8',
  },
  formButton: {
    flex: 0,
    height: 48,
    width: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formIcon: {
    width: 24,
    height: 24,
  },
  formTextField: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
