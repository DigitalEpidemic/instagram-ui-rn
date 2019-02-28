import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Icon } from "native-base";

export default class LikesTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) =>
      focused ? (
        <Icon type="AntDesign" name="heart" style={{ color: tintColor }} />
      ) : (
        <Icon type="AntDesign" name="hearto" style={{ color: tintColor }} />
      )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Likes Tab</Text>
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
