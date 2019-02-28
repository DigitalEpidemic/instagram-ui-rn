import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Icon } from "native-base";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Font } from "expo";

import HomeTab from "./AppTabNavigator/HomeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";

export default class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon type="Feather" name="camera" style={{ paddingLeft: 10, marginRight: 0, paddingRight: 0 }} />,
    // headerTitle: <Text style={{ fontFamily: "Billabong", fontSize: 33, marginTop: 18 }}>Instagram</Text>, // Optional custom font
    headerTitle: (
      <Image
        source={require("../assets/logo-large.png")}
        style={{ height: "42%", resizeMode: "contain", marginLeft: -50, marginTop: 5 }}
      />
    ),
    headerRight: (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Icon type="Feather" name="tv" style={{ paddingRight: 20 }} />
        <Icon type="Feather" name="send" style={{ paddingRight: 10 }} />
      </View>
    )
  };

  render() {
    return <AppContainer />;
  }
}

const AppTabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeTab
    },
    SearchTab: {
      screen: SearchTab
    },
    AddMediaTab: {
      screen: AddMediaTab
    },
    LikesTab: {
      screen: LikesTab
    },
    ProfileTab: {
      screen: ProfileTab
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showLabel: false,
      showIcon: true
    }
  }
);

const AppContainer = createAppContainer(AppTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
