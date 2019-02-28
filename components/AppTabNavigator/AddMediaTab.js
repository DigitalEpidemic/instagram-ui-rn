import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Icon } from "native-base";

export default class AddMediaTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) =>
      focused ? (
        <Icon type="FontAwesome" name="plus-square" style={{ color: tintColor }} />
      ) : (
        <Icon type="FontAwesome" name="plus-square-o" style={{ color: tintColor }} />
      )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Add Media Tab</Text>
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