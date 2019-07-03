import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class AddDeck extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Add Deck</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default AddDeck;
