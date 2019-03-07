import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Container, Card, CardItem, Left, Thumbnail, Body, Right, Icon, Button } from "native-base";
import YouItem from "../../YouItem";

import { StoryImages } from "../../../utility/ImageLocations";

export default class YouTab extends Component {
  static navigationOptions = {
    tabBarLabel: "YOU"
  };

  render() {
    return (
      <Container style={styles.container}>
        <ScrollView>
          {/* Promotions */}
          <Card style={{ marginTop: -5 }}>
            <CardItem bordered>
              <Left>
                <Thumbnail source={StoryImages["8"]} />
                <Body>
                  <Text style={{ fontSize: 16 }}>Promotions</Text>
                  <Text note style={{ color: "#555555" }}>
                    Recent activity from your promotions.
                  </Text>
                </Body>
              </Left>
            </CardItem>

            {/* Today */}
            <CardItem>
              <Text style={{ fontSize: 15, fontWeight: "700" }}>Today</Text>
            </CardItem>
            <YouItem username="xxxtentacion" imageSource="5" time="1 h" likedPost="8" />
            <YouItem username="xxxtentacion" imageSource="5" time="1 h" likedPost="1" />
            <YouItem username="xxxtentacion" imageSource="5" time="1 h" follow />

            {/* Yesterday */}
            <CardItem>
              <Text style={{ fontSize: 15, fontWeight: "700" }}>Yesterday</Text>
            </CardItem>
            <YouItem username="ubisoft" imageSource="6" time="1 d" likedPost="2" />
            <YouItem username="m.cordeiroo" imageSource="7" time="1 d" likedPost="3" />
            <YouItem username="vancityreynolds" imageSource="2" time="3 d" likedPost="12" />
            <YouItem username="m.cordeiroo" imageSource="7" time="1 d" likedPost="5" />

            {/* This Week */}
            <CardItem>
              <Text style={{ fontSize: 15, fontWeight: "700" }}>This Week</Text>
            </CardItem>
            <YouItem username="thisisbillgates" imageSource="4" time="2 d" follow />
            <YouItem username="thisisbillgates" imageSource="4" time="2 d" likedPost="5" />
            <YouItem username="zuck" imageSource="3" time="2 d" follow />
            <YouItem username="vancityreynolds" imageSource="2" time="3 d" follow />
            <YouItem username="m.cordeiroo" imageSource="7" time="4 d" follow />
            <YouItem username="ubisoft" imageSource="6" time="4 d" follow />
          </Card>
        </ScrollView>
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
