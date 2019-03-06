import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Thumbnail, Icon } from "native-base";
import { StoryImages } from "../utility/ImageLocations";

export default class StoryItem extends Component {
  render() {
    if (this.props.yourStory) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View>
            <Thumbnail
              style={{
                marginHorizontal: 12
              }}
              source={StoryImages["1"]}
            />
            <Icon
              type="AntDesign"
              name="pluscircle"
              style={{
                fontSize: 15,
                color: "#3897f0",
                position: "absolute",
                bottom: 0,
                right: 9.5
              }}
            />
          </View>
          <Text style={{ fontSize: 12 }}>Your story</Text>
        </View>
      );
    }

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Thumbnail
          style={{
            marginHorizontal: 12,
            borderColor: "#c13584",
            borderWidth: 2
          }}
          source={StoryImages[this.props.imageSource]}
        />
        <Text style={{ fontSize: 12 }}>{this.props.username}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
