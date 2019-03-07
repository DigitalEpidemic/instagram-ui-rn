import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { CardItem, Left, Thumbnail, Body, Button } from "native-base";
import { StoryImages, GridImages } from "../utility/ImageLocations";

export default class YouItem extends Component {
  render() {
    return (
      <CardItem style={{ marginTop: -10 }}>
        <Left style={{ flex: 1 }}>
          <Thumbnail source={StoryImages[this.props.imageSource]} />
          <Body>
            <Text>
              <Text style={{ fontWeight: "bold" }}>{this.props.username}</Text>
              {this.props.follow ? " started following you." : this.props.likedPost ? " liked your post." : null}
              <Text style={{ color: "#555555" }}> {this.props.time}</Text>
            </Text>
          </Body>
        </Left>
        <View style={{ marginLeft: 15 }}>
          {this.props.likedPost ? (
            <Thumbnail square source={GridImages[this.props.likedPost]} />
          ) : (
            <Button
              bordered
              dark
              style={{
                justifyContent: "center",
                height: 28,
                borderRadius: 5,
                borderColor: "#c7c7c7",
                padding: 10
              }}
            >
              <Text>Following</Text>
            </Button>
          )}
        </View>
      </CardItem>
    );
  }
}

const styles = StyleSheet.create({});
