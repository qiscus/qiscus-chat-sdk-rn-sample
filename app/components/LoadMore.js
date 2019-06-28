import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import css from 'css-to-rn.macro';

export default class LoadMore extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}
                        onPress={this.props.onPress}>
        <Text style={styles.text}>Load more</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create(css`
  .container {
    background-color: green;
    height: 30px;
    border-radius: 5px;
  }
  .text {
    color: white;
  }
`);
