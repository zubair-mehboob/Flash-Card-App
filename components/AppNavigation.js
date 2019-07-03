import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { white, purple } from "../utils/colors";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import DeckList from "./DeckList";
import AddDeck from "./AddDeck";
import DeckView from "./DeckView";

const Home = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="cards" size={24} color={tintColor} />
      )
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: "ADD",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="plus-square" size={24} color={tintColor} />
      )
    }
  }
});

const MainNavigator = createStackNavigator({
  DeckList: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="cards" size={24} color={tintColor} />
      )
    }
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      title: "Deck Indo",
      headerTinitColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }
});

class AppNavigation extends Component {
  state = {};
  render() {
    console.log("Heyyyyyyyy");

    return <AppContainer />;
  }
}

const AppContainer = createAppContainer(MainNavigator);
export default AppNavigation;
