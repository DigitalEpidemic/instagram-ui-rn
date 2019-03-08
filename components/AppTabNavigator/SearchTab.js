import React, { Component } from "react";
import { Text, StyleSheet, View, Platform, StatusBar, Image, ScrollView, Dimensions } from "react-native";
import { Icon, Container, Item, Header, Input, Thumbnail, Card, Content } from "native-base";
import { StoryImages, GridImages } from "../../utility/ImageLocations";

import StoryItem from "../StoryItem";
import SearchCategory from "../SearchCategory";
import SearchGridItem from "../SearchGridItem";

const { width, height } = Dimensions.get("window");

export default class SearchTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) =>
      focused ? (
        <Icon type="FontAwesome" name="search" style={{ color: tintColor, fontSize: 24 }} />
      ) : (
        <Icon type="Ionicons" name="ios-search" style={{ color: tintColor, fontSize: 26 }} />
      )
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar style={[styles.androidHeader]}>
          <Item style={{ marginLeft: -10, marginRight: -10 }}>
            <Icon type="Feather" name="search" />
            <Input placeholder="Search" />
            <Icon type="MaterialCommunityIcons" name="image-filter-center-focus-weak" style={{ fontSize: 30 }} />
          </Item>
        </Header>

        <Content>
          {/* Categories */}
          <View style={{ flex: 3, height: 100 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                paddingStart: 5,
                paddingEnd: 5
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginBottom: -5
                }}
              >
                {/* For You */}
                <View style={{ marginLeft: -10, marginRight: -10 }}>
                  <Thumbnail
                    blurRadius={25}
                    square
                    style={{
                      marginHorizontal: 12,
                      width: 105,
                      height: 77.5,
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: "#c7c7c7"
                    }}
                    source={StoryImages["1"]}
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
                    <Thumbnail small source={StoryImages["1"]} />
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        textShadowColor: "#000",
                        textShadowOffset: { width: 0, height: 1 }
                      }}
                    >
                      For You
                    </Text>
                  </View>
                </View>
                <SearchCategory label="Style" imageSource="1" />
                <SearchCategory label="Shopping" imageSource="2" />
                <SearchCategory label="Animals" imageSource="3" />
                <SearchCategory label="Fitness" imageSource="4" />
                <SearchCategory label="Sports" imageSource="5" />
                <SearchCategory label="Art" imageSource="6" />
              </View>
            </ScrollView>
          </View>

          {/* Discover Grid */}
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            <View>
              <SearchGridItem imageSource="3" />
              <SearchGridItem imageSource="2" />
            </View>
            <SearchGridItem imageSource="1" video />
            <SearchGridItem imageSource="4" />
            <SearchGridItem imageSource="5" />
            <SearchGridItem imageSource="9" />
            <SearchGridItem imageSource="6" />
            <SearchGridItem imageSource="7" />
            <SearchGridItem imageSource="8" />
            <SearchGridItem imageSource="10" />
            <SearchGridItem imageSource="11" />
            <SearchGridItem imageSource="12" />
            <SearchGridItem imageSource="13" />
            <SearchGridItem imageSource="14" />
            <SearchGridItem imageSource="15" />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  androidHeader: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: "white"
      }
    })
  },
  androidHeaderTitle: {
    ...Platform.select({
      android: {
        alignItems: "flex-end"
      }
    })
  }
});
