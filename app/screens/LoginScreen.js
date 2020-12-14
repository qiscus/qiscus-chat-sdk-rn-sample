import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import xs from 'xstream';
import flattenConcurently from 'xstream/extra/flattenConcurrently';
import * as Qiscus from 'qiscus';

export function LoginPage(props) {
  const storage = useAsyncStorage('qiscus');
  const [userId, setUserId] = useState('guest-101');
  const [userKey, setUserKey] = useState('passkey');
  const [isLogin, setIsLogin] = useState(false);

  // on mount
  useEffect(() => {
    const subscription = Qiscus.login$()
      .map((it) => it.user)
      .take(1)
      .map((data) => xs.fromPromise(storage.setItem(JSON.stringify(data))))
      .compose(flattenConcurently)
      .subscribe({
        next() {
          setIsLogin(true);
        },
      });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const onSubmit = useCallback(() => {
    Qiscus.qiscus
      .setUser(userId, userKey)
      .then((res) => console.log('success login', res))
      .catch((err) => console.log('Failed login', err));
  }, [userId, userKey]);

  useEffect(() => {
    if (isLogin) {
      props.navigation.replace('RoomList');
    }
  }, [isLogin]);

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={{height: '100%', width: '100%'}}>
        <KeyboardAvoidingView enabled>
          <ImageBackground
            source={require('assets/bg-pattern.png')}
            style={styles.background}>
            <View style={styles.container}>
              <Image source={require('assets/logo.png')} style={styles.logo} />
              <View style={styles.form}>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>User ID</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(text) => setUserId(text)}
                    value={userId}
                  />
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>User Key</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(text) => setUserKey(text)}
                    value={userKey}
                    secureTextEntry={true}
                  />
                </View>
                <View style={styles.formGroup}>
                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={onSubmit}>
                    <Text style={styles.submitText}>Start</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}

export default class LoginScreen extends React.Component {
  state = {
    userId: 'guest-101',
    userKey: 'passkey',
    isLogin: false,
  };

  componentDidMount() {
    this.subscription = Qiscus.login$()
      .map((data) => data.user)
      .take(1)
      .subscribe({
        next: (data) => {
          AsyncStorage.setItem('qiscus', JSON.stringify(data))
            .then(() => {
              this.setState({isLogin: true});
            })
            .catch(() => {});
        },
      });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  onSubmit = () => {
    console.log('isinit:', Qiscus.qiscus.isInit);
    console.log('onsubmit:', this.state);
    Qiscus.qiscus
      .setUser(this.state.userId, this.state.userKey)
      .then((res) => console.log('success login', res))
      .catch((err) => console.log('Failed login', err));
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isLogin && prevState.isLogin !== this.state.isLogin) {
      this.props.navigation.replace('RoomList');
    }
  }

  render() {
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{height: '100%', width: '100%'}}>
          <KeyboardAvoidingView enabled>
            <ImageBackground
              source={require('assets/bg-pattern.png')}
              style={styles.background}>
              <View style={styles.container}>
                <Image
                  source={require('assets/logo.png')}
                  style={styles.logo}
                />
                <View style={styles.form}>
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>User ID</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={(text) => this.setState({userId: text})}
                      value={this.state.userId}
                    />
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>User Key</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={(text) => this.setState({userKey: text})}
                      value={this.state.userKey}
                      secureTextEntry={true}
                    />
                  </View>
                  <View style={styles.formGroup}>
                    <TouchableOpacity
                      style={styles.submitButton}
                      onPress={() => this.onSubmit()}>
                      <Text style={styles.submitText}>Start</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
  },
  container: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 45,
    height: '100%',
    width: '100%',
  },
  logo: {
    marginTop: 60,
    resizeMode: 'contain',
    width: '80%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 80,
    width: '100%',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  label: {
    fontStyle: 'normal',
    fontWeight: '600',
    // lineHeight: 'normal',
    fontSize: 11,
    textTransform: 'uppercase',
    color: '#979797',
  },
  input: {
    height: 35,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },
  submitButton: {
    backgroundColor: '#9aca62',
    borderRadius: 2,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    color: 'white',
    paddingVertical: 15,
    paddingHorizontal: 10,
    textTransform: 'uppercase',
    alignItems: 'center',
  },
  submitText: {
    color: 'white',
    textTransform: 'capitalize',
  },
});
