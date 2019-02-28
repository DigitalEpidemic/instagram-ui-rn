import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Icon } from "native-base";

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
      <View style={styles.container}>
        <Text>Search Tab</Text>
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
