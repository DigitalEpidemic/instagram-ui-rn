import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Icon } from "native-base";

export default class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) =>
      focused ? (
        <Icon type="MaterialIcons" name="person" style={{ color: tintColor }} />
      ) : (
        <Icon type="MaterialIcons" name="person-outline" style={{ color: tintColor }} />
      )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Tab</Text>
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
