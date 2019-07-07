import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { getData } from "../utils/api";
import { connect } from "react-redux";
import { getDecks, removeItemValue } from "../utils/api";
import { recieveDecks } from "../actions";

class DeckList extends Component {
  state = {};
  componentDidMount() {
    getDecks().then(decks => {
      this.props.recieveAllDecks(decks);
    });
  }

  render() {
    const { decks } = this.props;

    return (
      <View style={styles.container}>
        {Object.keys(decks).map((deck, i) => {
          const { title, questions } = decks[deck];
          return (
            <View key={i} style={styles.items}>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.num}>{questions.length}</Text>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() =>
                  this.props.navigation.navigate("DeckView", { entryId: deck })
                }
              >
                <Text style={styles.txt}>View Deck</Text>
              </TouchableOpacity>
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
  },
  items: {
    borderWidth: 1,
    borderColor: "skyblue",
    padding: 10,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 30,
    color: "skyblue"
  },
  buttonStyle: {
    backgroundColor: "skyblue",
    margin: 10,
    padding: 10,
    width: 200,
    borderRadius: 10
  },
  txt: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },
  num: {
    fontSize: 22,
    color: "skyblue"
  }
});

const mapStateToProps = decks => {
  return {
    decks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    recieveAllDecks: decks => dispatch(recieveDecks(decks))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);
