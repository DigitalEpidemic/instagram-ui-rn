import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Platform, StatusBar } from "react-native";
import { Icon, Header, Button } from "native-base";
import { Camera, Permissions } from "expo";
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";

import GalleryTab from "./MediaTabNavigator/GalleryTab";
import PhotoTab from "./MediaTabNavigator/PhotoTab";
import VideoTab from "./MediaTabNavigator/VideoTab";

const AppTabNavigator = createMaterialTopTabNavigator(
  {
    GalleryTab: {
      screen: GalleryTab
    },
    PhotoTab: {
      screen: PhotoTab
    },
    VideoTab: {
      screen: VideoTab
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showLabel: true,
      showIcon: false,
      style: {
        backgroundColor: "#fff"
      },
      indicatorStyle: {
        backgroundColor: "#000"
      }
    },
    tabBarPosition: "bottom"
  }
);

const AppContainer = createAppContainer(AppTabNavigator);

export default class AddMediaTab extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener("willFocus", () => this.setState({ focusedScreen: true }));
    navigation.addListener("willBlur", () => this.setState({ focusedScreen: false }));
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) =>
      focused ? (
        <Icon type="FontAwesome" name="plus-square" style={{ color: tintColor }} />
      ) : (
        <Icon type="FontAwesome" name="plus-square-o" style={{ color: tintColor }} />
      ),
    tabBarVisible: true
  };

  state = {
    focusedScreen: false
  };

  render() {
    const { focusedScreen } = this.state;
    if (focusedScreen) {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar hidden />
          <AppContainer />
        </View>
      );
    } else {
      return <View />;
    }
  }
}
