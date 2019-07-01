import React from "react";
import { View, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";
import css from "css-to-rn.macro";

export default class Toolbar extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        {this.props.renderLeftButton && this.props.renderLeftButton()}
        <TouchableWithoutFeedback
          style={styles.titleButton}
          onPress={this._onPress}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.props.title}</Text>
            {this.props.renderMeta && this.props.renderMeta()}
          </View>
        </TouchableWithoutFeedback>
        {this.props.renderRightButton && this.props.renderRightButton()}
      </View>
    );
  }

  _onPress = () => {
    this.props.onPress && this.props.onPress();
  };
}

const styles = StyleSheet.create(css`
  .container {
    display: flex;
    height: 48px;
    width: 100%;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    padding: 5px 5px 5px 10px;
    border-bottom-width: 1px;
    border-bottom-color: #e8e8e8;
    background-color: white;
    flex-direction: row;
  }
  .titleButton {
    flex: 1;
    flex-basis: 100%;
    width: 100%;
    height: 100%;
  }
  .titleContainer {
    display: flex;
    flex: 1;
    height: 100%;
    margin-left: 10px;
  }
  .title {
    flex: 1;
    flex-basis: 100%;
    font-weight: 600;
    font-size: 18px;
    text-align: left;
    text-align-vertical: center;
    color: #362c33;
  }
`);
