import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Icon, Container, Content, Thumbnail, Card } from "native-base";
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
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <View>
                    <Thumbnail
                      style={{
                        marginHorizontal: 12
                      }}
                      source={require("../../assets/8biticon.jpg")}
                    />
                    <Icon
                      type="AntDesign"
                      name="pluscircle"
                      style={{
                        fontSize: 15,
                        color: "#3897f0",
                        position: "absolute",
                        bottom: 0,
                        right: 9.5
                      }}
                    />
                  </View>
                  <Text style={{ fontSize: 12 }}>Your story</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <Thumbnail
                    style={{
                      marginHorizontal: 12,
                      borderColor: "#c13584",
                      borderWidth: 2
                    }}
                    source={require("../../assets/profile5.jpg")}
                  />
                  <Text style={{ fontSize: 12 }}>xxxtentacion</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <Thumbnail
                    style={{
                      marginHorizontal: 12,
                      borderColor: "#c13584",
                      borderWidth: 2
                    }}
                    source={require("../../assets/profile6.jpg")}
                  />
                  <Text style={{ fontSize: 12 }}>ubisoft</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <Thumbnail
                    style={{
                      marginHorizontal: 12,
                      borderColor: "#c13584",
                      borderWidth: 2
                    }}
                    source={require("../../assets/profile4.jpg")}
                  />
                  <Text style={{ fontSize: 12 }}>thisisbillgates</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <Thumbnail
                    style={{
                      marginHorizontal: 12,
                      borderColor: "#c13584",
                      borderWidth: 2
                    }}
                    source={require("../../assets/profile3.jpg")}
                  />
                  <Text style={{ fontSize: 12 }}>zuck</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <Thumbnail
                    style={{
                      marginHorizontal: 12,
                      borderColor: "#c13584",
                      borderWidth: 2
                    }}
                    source={require("../../assets/profile2.jpg")}
                  />
                  <Text style={{ fontSize: 12 }}>vancityreynolds</Text>
                </View>
              </ScrollView>
            </View>
          </Card>
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
