import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Platform, StatusBar, ScrollView, Image, Dimensions } from "react-native";
import { Icon, Header, Button, Content } from "native-base";
import SearchGridItem from "../../SearchGridItem";
import { FeedImages } from "../../../utility/ImageLocations";
const { width, height } = Dimensions.get("window");

export default class GalleryTab extends Component {
  static navigationOptions = {
    tabBarLabel: "GALLERY"
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header style={[styles.androidHeader, { justifyContent: "flex-start", alignItems: "center" }]}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 17, fontWeight: "700" }}>Gallery</Text>
          </View>
        </Header>

        <View style={{ flex: 1 }}>
          <View style={[{ width: width }, { height: width / 1.5 }]}>
            <Image
              style={{
                flex: 1,
                alignSelf: "stretch",
                width: undefined,
                height: undefined,
                margin: 1
              }}
              source={FeedImages["1"]}
            />
          </View>
          <ScrollView>
            <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
              <SearchGridItem imageSource="1" />
              <SearchGridItem imageSource="2" />
              <SearchGridItem imageSource="3" />
              <SearchGridItem imageSource="4" />
              <SearchGridItem imageSource="5" />
              <SearchGridItem imageSource="6" />
              <SearchGridItem imageSource="7" />
              <SearchGridItem imageSource="8" />
              <SearchGridItem imageSource="9" />
              <SearchGridItem imageSource="10" />
              <SearchGridItem imageSource="11" />
              <SearchGridItem imageSource="12" />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  androidHeader: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: "white"
      }
    })
  }
});
