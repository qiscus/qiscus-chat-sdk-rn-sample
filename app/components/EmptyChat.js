import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';


export default function EmptyChat() {
  return (
    <View style={styles.container}>
      <Image source={require('assets/img_send_message.png')}
             style={styles.image}/>
      <Text style={styles.title}>
        Send a message!
      </Text>
      <Text style={styles.subtitle}>
        Great discussion start from greeting each other first
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 157,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  image: {
    width: 180,
    height: 154,
  },
  title: {
    marginTop: 24,
    fontSize: 18,
    color: '#666',
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 24,
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
  },
});
