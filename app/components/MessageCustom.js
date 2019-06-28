import React from "react";
import { View, Text, Image } from "react-native";

export default class MessageCustom extends React.Component {
  render() {
    const message = this.props.message;
    const imageURI = message.payload.content.url;
    const filename = message.payload.file_name;
    const type = message.payload.type;

    return (
      <View
        style={{
          height: 200,
          width: 200,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <View
          style={{
            width: 200,
            height: 150,
            flex: 1,
            flexBasis: 150
          }}
        >
          {type === "image" && (
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
              source={{ uri: imageURI }}
            />
          )}
        </View>
        {filename && <Text>{filename}</Text>}
      </View>
    );
  }
}
