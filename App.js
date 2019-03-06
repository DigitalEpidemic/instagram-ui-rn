import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from "./components/MainScreen";

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
});

const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
