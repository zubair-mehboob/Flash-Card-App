import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { white, purple } from "./utils/colors";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import DeckList from "./components/DeckList";
import AddDeck from "./components/AddDeck";
import DeckView from "./components/DeckView";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer);
export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

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
const AppContainer = createAppContainer(MainNavigator);
//export default AppContainer;
