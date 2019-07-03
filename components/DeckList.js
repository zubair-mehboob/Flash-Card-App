import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { getData } from "../utils/api";
import { connect } from "react-redux";
import { getDecks } from "../utils/api";
import { recieveDecks } from "../actions";

class DeckList extends Component {
  state = {};
  render() {
    const decks = getData();
    console.log(this.props);

    return (
      <View style={styles.container}>
        {Object.keys(decks).map((deck, i) => {
          const { title, questions } = decks[deck];
          return (
            <View key={i}>
              <Text>{title}</Text>
              <Text>{questions.length}</Text>
              <Button
                title="View Deck"
                onPress={() =>
                  this.props.navigation.navigate("DeckView", { entryId: deck })
                }
              />
            </View>
          );
        })}
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

const mapStateToProps = state => {
  return {
    decks: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    recieveAllDecks: decks => dispatch(recieveDecks)
  };
};
export default connect(mapStateToProps)(DeckList);
//export default DeckList;
