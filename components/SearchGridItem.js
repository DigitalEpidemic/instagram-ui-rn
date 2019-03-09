import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
import { SearchImages, FeedImages } from "../utility/ImageLocations";
import { Icon } from "native-base";

const { width, height } = Dimensions.get("window");

export default class SearchGridItem extends Component {
  render() {
    if (this.props.video) {
      return (
        <View style={[{ width: (width / 3) * 2 }, { height: (width / 3) * 2 }]}>
          <Image
            style={{
              flex: 1,
              alignSelf: "stretch",
              width: undefined,
              height: undefined,
              margin: 1
            }}
            source={SearchImages[1]}
          />
          <View style={{ position: "absolute", margin: 10 }}>
            <Icon type="AntDesign" name="playcircleo" style={{ fontSize: 38, color: "#fff" }} />
          </View>
          <View style={{ position: "absolute", bottom: 0, margin: 10 }}>
            <Text style={{ color: "#fff", fontSize: 18 }}>Watch</Text>
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Videos You Might Like</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={[{ width: width / 3 }, { height: width / 3 }]}>
          <Image
            style={{
              flex: 1,
              alignSelf: "stretch",
              width: undefined,
              height: undefined,
              margin: 1
            }}
            source={this.props.feed ? FeedImages[this.props.imageSource] : SearchImages[this.props.imageSource]}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({});
