import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default class MessageUpload extends React.PureComponent {
  render() {
    const imageURI = this.props.message.fileURI;
    const caption = "Uploading";
    const filename = "Ini-filename.pdf";
    const type = "image";
    return (
      <>
        <View style={styles.container}>
          <View style={styles.uploadOverlay}>
            <View style={styles.progress}>
              <View style={styles.progressInner} />
            </View>
          </View>
          {type === "image" && (
            <Image style={styles.imagePreview} source={{ uri: imageURI }} />
          )}
          {type === "file" && (
            <View>
              <Image
                style={styles.icon}
                source={require("assets/ic_file_attachment.png")}
              />
              <Text style={styles.filename}>{filename}</Text>
            </View>
          )}
        </View>
        <Text style={styles.caption}>{caption}</Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  uploadOverlay: {},
  progress: {},
  progressInner: {},
  icon: {},
  filename: {},
  imagePreview: {
    resizeMode: "cover",
    height: 200,
    width: 200
  },
  caption: {}
});
