import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

export default class Toolbar extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        {this.props.renderLeftButton && this.props.renderLeftButton()}
        <Text style={styles.title}>
          {this.props.title}
        </Text>
        {this.props.renderRightButton && this.props.renderRightButton()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 48,
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'left',
    color: '#362c33',
    marginLeft: 10,
  },
})
