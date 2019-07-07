import React, { Component } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { getData } from "../utils/api";
import { connect } from "react-redux";
class DeckView extends Component {
  state = {};

  render() {
    const deck = this.props.navigation.state.params.entryId;
    //alert("hey");
    const { decks } = this.props;
    //console.log(decks);
    //alert(decks["Python"].title);
    //console.log(decks[deck].questions.length);

    return (
      <View style={styles.container}>
        <Text>{decks[deck].title}</Text>
        <Text>{decks[deck].questions.length}</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          title="Add Card"
          onPress={() =>
            this.props.navigation.navigate("AddNewCard", { entryId: deck })
          }
        >
          <Text style={styles.txt}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            this.props.navigation.navigate("Quize", { entryId: deck })
          }
        >
          <Text style={styles.txt}>Start Quiz</Text>
        </TouchableOpacity>
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
  buttonStyle: {
    backgroundColor: "skyblue",
    margin: 10,
    padding: 10,
    width: 200,
    borderRadius: 10
  },
  txt: {
    color: "white",
    textAlign: "center"
  }
});
const mapStateToProps = state => {
  return {
    decks: state
  };
};
export default connect(mapStateToProps)(DeckView);
