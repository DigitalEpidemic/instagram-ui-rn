import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image, Platform, StatusBar } from "react-native";
import { Icon, Container, Content, Card, Header, Left, Right, Body } from "native-base";
import CardComponent from "../CardComponent";
import StoryItem from "../StoryItem";
import { LogoImage } from "../../utility/ImageLocations";

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
        <StatusBar hidden={false} />
        {/* Header */}
        <Header style={[styles.androidHeader]}>
          <Left>
            <Icon type="Feather" name="camera" style={{ paddingLeft: 2 }} />
          </Left>
          <Body>
            <Image source={LogoImage} style={{ height: 23, width: 80, marginLeft: -14, marginTop: 8 }} />
          </Body>
          <Right>
            <Icon type="Feather" name="tv" style={{ paddingRight: 20 }} />
            <Icon type="Feather" name="send" style={{ paddingRight: 2 }} />
          </Right>
        </Header>

        <Content style={{ zIndex: -3 }}>
          <Card style={{ marginTop: -5 }}>
            <View style={{ flex: 3, height: 100 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: "center",
                  paddingStart: 5,
                  paddingEnd: 5
                }}
              >
                {/* Stories */}
                <StoryItem yourStory />
                <StoryItem username="xxxtentacion" imageSource="5" />
                <StoryItem username="ubisoft" imageSource="6" />
                <StoryItem username="m.cordeiroo" imageSource="7" />
                <StoryItem username="thisisbillgates" imageSource="4" />
                <StoryItem username="zuck" imageSource="3" />
                <StoryItem username="vancityreynolds" imageSource="2" />
              </ScrollView>
            </View>
          </Card>

          {/* Feed */}
          <CardComponent imageSource="1" likes="377" />
          <CardComponent imageSource="2" likes="864" />
          <CardComponent imageSource="3" likes="256" />
          <CardComponent imageSource="4" likes="174" />
          <CardComponent imageSource="5" likes="865" />
          <CardComponent imageSource="6" likes="453" />
          <CardComponent imageSource="7" likes="123" />
          <CardComponent imageSource="8" likes="654" />
          <CardComponent imageSource="9" likes="789" />
          <CardComponent imageSource="10" likes="820" />
          <CardComponent imageSource="11" likes="204" />
          <CardComponent imageSource="12" likes="574" />
          <CardComponent imageSource="13" likes="148" />
          <CardComponent imageSource="14" likes="888" />
          <CardComponent imageSource="15" likes="982" />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  androidHeader: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: "white"
      }
    })
  },
  androidHeaderTitle: {
    ...Platform.select({
      android: {
        alignItems: "flex-end"
      }
    })
  }
});
