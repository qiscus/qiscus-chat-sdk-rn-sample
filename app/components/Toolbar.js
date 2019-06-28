import React from "react";
import { View, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";

export default class Toolbar extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        {this.props.renderLeftButton && this.props.renderLeftButton()}
        <TouchableWithoutFeedback onPress={this._onPress}>
          <Text style={styles.title}>{this.props.title}</Text>
        </TouchableWithoutFeedback>
        {this.props.renderRightButton && this.props.renderRightButton()}
      </View>
    );
  }

  _onPress = () => {
    this.props.onPress && this.props.onPress();
  };
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 48,
    width: "100%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#e8e8e8",
    backgroundColor: "white",
    flexDirection: "row"
  },
  title: {
    flex: 1,
    fontWeight: "600",
    fontSize: 18,
    textAlign: "left",
    color: "#362c33",
    marginLeft: 10
  }
});
