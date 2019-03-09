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
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    flash: true
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
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

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return <AppContainer />;
    }
  }
}
