import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Platform, StatusBar, Dimensions } from "react-native";
import { Icon, Header, Button } from "native-base";
import { Camera, Permissions } from "expo";
const { width, height } = Dimensions.get("window");

export default class PhotoTab extends Component {
  static navigationOptions = {
    tabBarLabel: "PHOTO"
  };

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    flash: true
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener("willFocus", () => this.setState({ focusedScreen: true }));
    navigation.addListener("willBlur", () => this.setState({ focusedScreen: false }));
  }

  cameraView() {
    return (
      <View style={{ flex: 1 }}>
        <Header style={[styles.androidHeader, { justifyContent: "flex-start", alignItems: "center" }]}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 17, fontWeight: "700" }}>Photo</Text>
          </View>
        </Header>
        <Camera style={[{ width: width }, { height: width }]} type={this.state.type} ratio="1:1">
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 5
            }}
          >
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: "flex-end",
                alignItems: "center"
              }}
              onPress={() => {
                this.setState({
                  type:
                    this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
                });
              }}
            >
              <Icon type="Feather" name="refresh-ccw" style={{ color: "#fff" }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: "flex-end",
                alignItems: "center"
              }}
              onPress={() => {
                this.setState({
                  flash: !this.state.flash
                });
              }}
            >
              {this.state.flash ? (
                <Icon type="Ionicons" name="ios-flash" style={{ color: "#fff" }} />
              ) : (
                <Icon type="Ionicons" name="ios-flash-off" style={{ color: "#fff" }} />
              )}
            </TouchableOpacity>
          </View>
        </Camera>
        <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity>
            <Icon type="FontAwesome" name="circle-o" style={{ fontSize: 100, color: "#c7c7c7" }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    const { hasCameraPermission, focusedScreen } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else if (focusedScreen) {
      return this.cameraView();
    } else {
      return <View />;
    }
  }
}

const styles = StyleSheet.create({
  androidHeader: {
    ...Platform.select({
      android: {
        // marginTop: StatusBar.currentHeight,
        backgroundColor: "white"
      }
    })
  }
});
