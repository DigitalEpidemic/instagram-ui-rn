import React, { Component } from "react";
import { Text, StyleSheet, View, Platform, StatusBar } from "react-native";
import { Icon, Container } from "native-base";
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";

import FollowingTab from "./LikesTabNavigator/FollowingTab";
import YouTab from "./LikesTabNavigator/YouTab";

const LikesTabNavigator = createMaterialTopTabNavigator(
  {
    FollowingTab: {
      screen: FollowingTab
    },
    YouTab: {
      screen: YouTab
    }
  },
  {
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            marginTop: StatusBar.currentHeight,
            backgroundColor: "white"
          }
        })
      },
      labelStyle: {
        color: "black"
      },
      indicatorStyle: {
        backgroundColor: "black"
      }
    }
  }
);

const AppContainer = createAppContainer(LikesTabNavigator);

export default class LikesTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) =>
      focused ? (
        <Icon type="AntDesign" name="heart" style={{ color: tintColor, fontSize: 24 }} />
      ) : (
        <Icon type="AntDesign" name="hearto" style={{ color: tintColor, fontSize: 24 }} />
      )
  };

  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
