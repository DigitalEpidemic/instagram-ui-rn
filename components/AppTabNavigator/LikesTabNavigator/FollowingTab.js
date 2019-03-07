import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Container, Card } from "native-base";
import FollowingItem from "../../FollowingItem";

export default class FollowingTab extends Component {
  static navigationOptions = {
    tabBarLabel: "FOLLOWING"
  };

  render() {
    return (
      <Container style={styles.container}>
        <ScrollView>
          {/* Promotions */}
          <Card>
            <FollowingItem username="xxxtentacion" imageSource="5" likeName="ubisoft" likedPost="1" time="1 s" />
            <FollowingItem username="thisisbillgates" imageSource="4" followName="apple" time="10 s" />
            <FollowingItem username="zuck" imageSource="3" likeName="xxxtentacion" likedPost="9" time="30 s" />
            <FollowingItem username="ubisoft" imageSource="6" likeName="nintendo" likedPost="12" time="35 s" />
            <FollowingItem username="m.cordeiroo" imageSource="7" followName="xxxtentacion" time="48 s" />
            <FollowingItem username="xxxtentacion" imageSource="5" followName="m.cordeiroo" time="49 s" />
            <FollowingItem username="vancityreynolds" imageSource="2" likeName="capcom" likedPost="8" time="53 s" />
            <FollowingItem username="ubisoft" imageSource="6" followName="corsair" time="1 m" />
            <FollowingItem username="vancityreynolds" imageSource="2" followName="marvel" time="1 m" />
            <FollowingItem username="thisisbillgates" imageSource="4" likeName="microsoft" likedPost="6" time="2 m" />
            <FollowingItem username="zuck" imageSource="3" followName="kendalljenner" time="3 m" />
            <FollowingItem username="xxxtentacion" imageSource="5" followName="ubisoft" time="4 m" />
          </Card>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
