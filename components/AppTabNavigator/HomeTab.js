import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Icon } from "native-base";

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) =>
      focused ? (
        <Icon type="MaterialCommunityIcons" name="home" style={{ color: tintColor }} />
      ) : (
        <Icon type="MaterialCommunityIcons" name="home-outline" style={{ color: tintColor }} />
      )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Tab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
