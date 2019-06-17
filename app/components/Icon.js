import React from 'react'
import {
  Image,
  StyleSheet,
} from 'react-native'


export default function Icon (props) {
  return (
    <Image source={props.source} style={styles.icon} />
  )
}

const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  }
})
