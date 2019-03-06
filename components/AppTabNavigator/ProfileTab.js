import React, { Component } from "react";
import { Text, StyleSheet, View, Platform, StatusBar, Image, Dimensions, FlatList, ActivityIndicator } from "react-native";
import { Icon, Container, Content, Header, Left, Right, Button } from "native-base";
import CardComponent from "../CardComponent";
import { GridImages, TaggedImages, StoryImages } from "../../utility/ImageLocations";

const { width, height } = Dimensions.get("window");

export default class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) =>
      focused ? (
        <Icon type="MaterialIcons" name="person" style={{ color: tintColor }} />
      ) : (
        <Icon type="MaterialIcons" name="person-outline" style={{ color: tintColor }} />
      )
  };

  state = {
    activeIndex: 0,
    isLoading: false
  };

  segmentClicked = index => {
    if (this.state.activeIndex != index) {
      this.setState({
        isLoading: true,
        activeIndex: index
      });
    }
  };

  renderSection() {
    switch (this.state.activeIndex) {
      case 0: // Grid view
        return (
          <FlatList
            initialNumToRender={9}
            data={GridImages}
            key={"grid"}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            ListFooterComponent={this.renderIndicator.bind(this)}
            onEndReached={() => this.setState({ isLoading: false })}
            onEndReachedThreshold={0.1}
            renderItem={({ item, index }) => (
              <View key={index} style={[{ width: width / 3 }, { height: width / 3 }]}>
                <Image
                  style={{
                    flex: 1,
                    alignSelf: "stretch",
                    width: undefined,
                    height: undefined,
                    margin: 1
                  }}
                  source={GridImages[index]}
                />
              </View>
            )}
          />
        );
      case 1: // Vertical view
        return (
          // <View style={{ flex: 1 }}>
          <FlatList
            initialNumToRender={2}
            data={[
              { source: "1", likes: "377" },
              { source: "2", likes: "864" },
              { source: "3", likes: "256" },
              { source: "4", likes: "174" },
              { source: "5", likes: "865" },
              { source: "6", likes: "453" },
              { source: "7", likes: "123" },
              { source: "8", likes: "654" },
              { source: "9", likes: "789" },
              { source: "10", likes: "820" },
              { source: "11", likes: "204" },
              { source: "12", likes: "574" },
              { source: "13", likes: "148" },
              { source: "14", likes: "888" },
              { source: "15", likes: "982" }
            ]}
            key={"list"}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <CardComponent imageSource={item.source} likes={item.likes} />}
            ListFooterComponent={this.renderIndicator.bind(this)}
            onEndReached={() => this.setState({ isLoading: false })}
            onEndReachedThreshold={0.1}
          />
          // </View>
        );
      case 2: // Tagged photos
        return (
          <FlatList
            initialNumToRender={9}
            data={TaggedImages}
            key={"grid"}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            ListFooterComponent={this.renderIndicator.bind(this)}
            onEndReached={() => this.setState({ isLoading: false })}
            onEndReachedThreshold={0.1}
            renderItem={({ item, index }) => (
              <View key={index} style={[{ width: width / 3 }, { height: width / 3 }]}>
                <Image
                  style={{
                    flex: 1,
                    alignSelf: "stretch",
                    width: undefined,
                    height: undefined,
                    margin: 1
                  }}
                  source={TaggedImages[index]}
                />
              </View>
            )}
          />
        );
    }
  }

  renderIndicator() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: "#fff" }}>
        <Header style={[styles.androidHeader]}>
          <Left style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>littlepolasz{"  "}</Text>
            <Icon type="AntDesign" name="caretdown" style={{ fontSize: 8 }} />
          </Left>
          <Right>
            <Icon
              type="MaterialIcons"
              name="update"
              style={{ paddingLeft: 10, transform: [{ scaleX: -1 }], fontSize: 35 }}
            />
            <Icon type="SimpleLineIcons" name="menu" style={{ paddingRight: 2, paddingBottom: 5, fontSize: 24 }} />
          </Right>
        </Header>

        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                {/* If posted to story */}
                <Image
                  style={{
                    width: 77,
                    height: 77,
                    borderRadius: 37.5,
                    borderWidth: 4,
                    borderColor: "#c7c7c7"
                  }}
                />
                <Image
                  source={StoryImages["1"]}
                  style={{
                    width: 75,
                    height: 75,
                    position: "absolute",
                    top: 1,
                    borderRadius: 37.5,
                    borderWidth: 3,
                    borderColor: "#fff"
                  }}
                />
              </View>

              {/* posts, following and followers */}
              <View style={{ flex: 3 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>15</Text>
                    <Text style={{ fontSize: 13, color: "grey" }}>posts</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>1,056</Text>
                    <Text style={{ fontSize: 13, color: "grey" }}>Following</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>1,352</Text>
                    <Text style={{ fontSize: 13, color: "grey" }}>Followers</Text>
                  </View>
                </View>

                {/* Buttons */}
                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                  <Button
                    bordered
                    dark
                    style={{
                      flex: 3,
                      marginLeft: 16,
                      marginRight: 5,
                      justifyContent: "center",
                      height: 28,
                      borderRadius: 5,
                      borderColor: "#c7c7c7"
                    }}
                  >
                    <Text>Promotions</Text>
                  </Button>
                  <Button
                    bordered
                    dark
                    style={{
                      flex: 3,
                      marginRight: 16,
                      justifyContent: "center",
                      height: 28,
                      borderRadius: 5,
                      borderColor: "#c7c7c7"
                    }}
                  >
                    <Text>Edit Profile</Text>
                  </Button>
                </View>
              </View>
            </View>

            {/* Bio */}
            <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Jeffrey Polasz</Text>
              <Text style={{ color: "grey" }}>Athlete</Text>
              <Text>53kg/59kg</Text>
              <Text>Terrible powerlifter and subpar game developer</Text>
            </View>
          </View>

          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around", borderTopWidth: 1, borderTopColor: "#c7c7c7" }}
            >
              <Button transparent onPress={() => this.segmentClicked(0)} active={this.state.activeIndex == 0}>
                <Icon
                  type="Ionicons"
                  name="md-grid"
                  style={[this.state.activeIndex == 0 ? { color: "#3897f0" } : { color: "#c7c7c7" }]}
                />
              </Button>
              <Button transparent onPress={() => this.segmentClicked(1)} active={this.state.activeIndex == 1}>
                <Icon
                  type="Feather"
                  name="square"
                  style={[
                    this.state.activeIndex == 1 ? { color: "#3897f0" } : { color: "#c7c7c7" },
                    { fontSize: 18, marginLeft: 18 }
                  ]}
                />
                <Icon
                  type="Feather"
                  name="minus"
                  style={[
                    this.state.activeIndex == 1 ? { color: "#3897f0" } : { color: "#c7c7c7" },
                    { fontSize: 22, position: "absolute", bottom: 21 }
                  ]}
                />
                <Icon
                  type="Feather"
                  name="minus"
                  style={[
                    this.state.activeIndex == 1 ? { color: "#3897f0" } : { color: "#c7c7c7" },
                    { fontSize: 22, position: "absolute", top: 21 }
                  ]}
                />
              </Button>
              <Button transparent onPress={() => this.segmentClicked(2)} active={this.state.activeIndex == 2}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="account-box-outline"
                  style={[this.state.activeIndex == 2 ? { color: "#3897f0" } : { color: "#c7c7c7" }]}
                />
              </Button>
            </View>

            {this.renderSection()}
          </View>
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
