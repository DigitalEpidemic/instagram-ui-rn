import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Icon, Container, Content } from "native-base";
import CardComponent from "../CardComponent";

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
      <Container style={styles.container}>
        <Content>
          <CardComponent imageSource="1" likes="377" />
          <CardComponent imageSource="2" likes="864" />
          <CardComponent imageSource="3" likes="256" />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
