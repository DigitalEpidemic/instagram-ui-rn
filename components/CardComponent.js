import React, { Component } from "react";
import { Text, StyleSheet, Image } from "react-native";
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from "native-base";
import { ListImages, StoryImages } from "../utility/ImageLocations";

export default class CardComponent extends Component {
  render() {
    return (
      <Card style={{ marginTop: -5 }}>
        {/* Profile Info */}
        <CardItem>
          <Left>
            <Thumbnail small source={StoryImages["1"]} />
            <Body>
              <Text style={{ fontWeight: "bold" }}>littlepolasz</Text>
              <Text note>Secret Location</Text>
            </Body>
          </Left>
          <Right>
            <Icon type="Entypo" name="dots-three-vertical" style={{ color: "#a7a4a4" }} />
          </Right>
        </CardItem>

        {/* Image */}
        <CardItem cardBody>
          <Image
            source={ListImages[this.props.imageSource]}
            style={{ height: 200, width: null, resizeMode: "cover", flex: 1 }}
          />
        </CardItem>

        {/* Buttons */}
        <CardItem>
          <Left style={{ marginTop: -12 }}>
            <Button transparent>
              <Icon type="Feather" name="heart" style={{ color: "#000", fontSize: 25 }} />
            </Button>
            <Button transparent>
              <Icon
                type="Feather"
                name="message-circle"
                style={{ color: "#000", transform: [{ rotate: "-90deg" }], fontSize: 25 }}
              />
            </Button>
            <Button transparent>
              <Icon type="Feather" name="send" style={{ color: "#000", fontSize: 25 }} />
            </Button>
          </Left>

          <Right style={{ marginTop: -12 }}>
            <Button transparent>
              <Icon type="FontAwesome" name="bookmark-o" style={{ color: "#000", fontSize: 25 }} />
            </Button>
          </Right>
        </CardItem>

        {/* Likes */}
        <CardItem style={{ marginTop: -24 }}>
          <Text style={{ fontWeight: "bold" }}>{this.props.likes} likes</Text>
        </CardItem>

        {/* Caption */}
        <CardItem style={{ marginTop: -15 }}>
          <Body>
            <Text>
              <Text style={{ fontWeight: "bold" }}>littlepolasz </Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra tempor tortor vel ullamcorper. Sed
              in blandit tortor. In eu dui ac purus placerat volutpat. Fusce sem est, suscipit eget maximus ultrices, euismod
              vitae arcu. Aliquam lacinia quam at mauris sodales, in congue velit consequat. Nunc faucibus porta tortor at
              aliquam.
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

// TODO Move some inline to styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
