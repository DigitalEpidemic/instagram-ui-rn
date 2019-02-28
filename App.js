import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from "./components/MainScreen";
// import { Font } from "expo"; // Optional custom font

export default class App extends React.Component {
  // state = {
  //   fontLoaded: false
  // };

  // async componentDidMount() {
  //   await Font.loadAsync({
  //     Billabong: require("./assets/fonts/Billabong.ttf")
  //   });

  //   this.setState({ fontLoaded: true });
  // }

  render() {
    // if (!this.state.fontLoaded) {
    //   return (
    //     <View style={styles.container}>
    //       <Text>Loading..</Text>
    //     </View>
    //   );
    // }
    return <AppContainer />;
  }
}

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
});

const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
