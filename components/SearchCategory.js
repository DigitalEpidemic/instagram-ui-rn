import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Thumbnail } from "native-base";
import { CategoryImages } from "../utility/ImageLocations";

export default class SearchCategory extends Component {
  render() {
    return (
      <View style={{ marginRight: -10, marginLeft: -5 }}>
        <Thumbnail
          square
          style={{
            marginHorizontal: 12,
            width: 105,
            height: 77.5,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#c7c7c7"
          }}
          source={CategoryImages[this.props.imageSource]}
        />
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View style={{ height: 36 }} />
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              textShadowColor: "#000",
              textShadowOffset: { width: 0, height: 1 }
            }}
          >
            {this.props.label}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
