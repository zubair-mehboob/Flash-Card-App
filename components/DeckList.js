import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { getData } from "../utils/api";
import { connect } from "react-redux";

class DeckList extends Component {
  state = {};
  render() {
    //console.log("Hey zubair redux is working", this.props);

    const decks = getData();
    // console.log("Testing console zubair: ", decks);

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
export default connect(mapStateToProps)(DeckList);
//export default DeckList;
