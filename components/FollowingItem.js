import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { CardItem, Left, Thumbnail, Body, Button } from "native-base";
import { StoryImages, FeedImages } from "../utility/ImageLocations";

export default class FollowingItem extends Component {
  render() {
    return (
      <CardItem style={{ marginTop: -10 }}>
        <Left style={{ flex: 1 }}>
          <Thumbnail source={StoryImages[this.props.imageSource]} />
          <Body>
            <Text>
              <Text style={{ fontWeight: "bold" }}>{this.props.username}</Text>
              {this.props.followName ? " started following " : this.props.likeName ? " liked " : null}
              <Text style={{ fontWeight: "bold" }}>
                {this.props.followName ? `${this.props.followName}` : this.props.likeName ? `${this.props.likeName}` : null}
              </Text>
              {this.props.followName ? "." : this.props.likeName ? "'s post." : null}
              <Text style={{ color: "#555555" }}> {this.props.time}</Text>
            </Text>
          </Body>
        </Left>
        <View style={{ marginLeft: 15 }}>
          {this.props.likedPost ? <Thumbnail square source={FeedImages[this.props.likedPost]} /> : null}
        </View>
      </CardItem>
    );
  }
}

const styles = StyleSheet.create({});
