import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Platform, StatusBar, ScrollView, Image, Dimensions } from "react-native";
import { Icon, Header, Button, Content } from "native-base";
import SearchGridItem from "../../SearchGridItem";
import { SearchImages, FeedImages } from "../../../utility/ImageLocations";
import ParallaxScrollView from "react-native-parallax-scrollview";
const { width, height } = Dimensions.get("window");

export default class GalleryTab extends Component {
  static navigationOptions = {
    tabBarLabel: "GALLERY"
  };

  state = {
    currentImage: SearchImages["1"]
  };

  changePicture(imageType, index) {
    if (imageType === "Search") {
      this.setState({ currentImage: SearchImages[index] });
    } else if (imageType === "Feed") {
      this.setState({ currentImage: FeedImages[index] });
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ParallaxScrollView
          windowHeight={width}
          backgroundSource={{
            uri:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAACgCAMAAADTjAl3AAAAA1BMVEX39/Ifv7zFAAAAJ0lEQVR4nO3BMQEAAADCoPVPbQo/oAAAAAAAAAAAAAAAAAAAAADgZ0LgAAGP+8q1AAAAAElFTkSuQmCC"
          }}
          navBarView={
            <View style={[{ width: width }, { height: width }]}>
              <Image
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  width: undefined,
                  height: undefined,
                  margin: 1
                }}
                source={this.state.currentImage}
              />
            </View>
          }
          navBarColor="white"
          headerView={<View style={{ flex: 1 }} />}
        >
          <ScrollView>
            <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
              <TouchableOpacity onPress={() => this.changePicture("Search", 1)}>
                <SearchGridItem imageSource="1" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changePicture("Search", 2)}>
                <SearchGridItem imageSource="2" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changePicture("Search", 3)}>
                <SearchGridItem imageSource="3" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changePicture("Search", 4)}>
                <SearchGridItem imageSource="4" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changePicture("Search", 5)}>
                <SearchGridItem imageSource="5" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changePicture("Search", 6)}>
                <SearchGridItem imageSource="6" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changePicture("Search", 7)}>
                <SearchGridItem imageSource="7" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changePicture("Search", 8)}>
                <SearchGridItem imageSource="8" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changePicture("Search", 9)}>
                <SearchGridItem imageSource="9" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changePicture("Search", 10)}>
                <SearchGridItem imageSource="10" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changePicture("Search", 11)}>
                <SearchGridItem imageSource="11" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changePicture("Search", 12)}>
                <SearchGridItem imageSource="12" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changePicture("Feed", 1)}>
                <SearchGridItem feed imageSource="1" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changePicture("Feed", 2)}>
                <SearchGridItem feed imageSource="2" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changePicture("Feed", 3)}>
                <SearchGridItem feed imageSource="3" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changePicture("Feed", 4)}>
                <SearchGridItem feed imageSource="4" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changePicture("Feed", 5)}>
                <SearchGridItem feed imageSource="5" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changePicture("Feed", 6)}>
                <SearchGridItem feed imageSource="6" />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ParallaxScrollView>
      </View>
    );
  }

  //   render() {
  //     return (
  //       <View style={{ flex: 1 }}>
  //         <Header style={[styles.androidHeader, { justifyContent: "flex-start", alignItems: "center" }]}>
  //           <View style={{ flex: 1 }}>
  //             <Text style={{ fontSize: 17, fontWeight: "700" }}>Gallery</Text>
  //           </View>
  //         </Header>

  //         <View style={{ flex: 1 }}>
  //           <View style={[{ width: width }, { height: width }]}>
  //             <Image
  //               style={{
  //                 flex: 1,
  //                 alignSelf: "stretch",
  //                 width: undefined,
  //                 height: undefined,
  //                 margin: 1
  //               }}
  //               source={FeedImages["1"]}
  //             />
  //           </View>
  //           <ScrollView>
  //             <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
  //               <SearchGridItem imageSource="1" />
  //               <SearchGridItem imageSource="2" />
  //               <SearchGridItem imageSource="3" />
  //               <SearchGridItem imageSource="4" />
  //               <SearchGridItem imageSource="5" />
  //               <SearchGridItem imageSource="6" />
  //               <SearchGridItem imageSource="7" />
  //               <SearchGridItem imageSource="8" />
  //               <SearchGridItem imageSource="9" />
  //               <SearchGridItem imageSource="10" />
  //               <SearchGridItem imageSource="11" />
  //               <SearchGridItem imageSource="12" />
  //             </View>
  //           </ScrollView>
  //         </View>
  //       </View>
  //     );
  //   }
}

const styles = StyleSheet.create({
  androidHeader: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: "white"
      }
    })
  }
});
