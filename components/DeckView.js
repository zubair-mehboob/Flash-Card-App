import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { getData } from "../utils/api";
class DeckView extends Component {
  state = {};

  render() {
    const deck = this.props.navigation.state.params.entryId;
    const decks = getData();
    console.log(decks[deck].questions.length);

    return (
      <View style={styles.container}>
        <Text>{deck}</Text>
        <Text>{decks[deck].questions.length}</Text>
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

export default DeckView;
