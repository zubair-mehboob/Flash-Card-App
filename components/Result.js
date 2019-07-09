import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class Result extends Component {
  state = {};
  render() {
    let obtainMarks = this.props.navigation.state.params.score;
    let totalMarks = this.props.navigation.state.params.questionLength;
    const deckName = this.props.navigation.state.params.deckName;
    obtainMarks = obtainMarks * 100;
    totalMarks = totalMarks * 100;
    const score = Math.round((obtainMarks / totalMarks) * 100);

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          {score > 50
            ? "Congratulation you have passed exam"
            : "Sorry you have failed"}
        </Text>
        <Text style={styles.titleText}>Your Score Is</Text>
        <Text style={{ fontSize: 40, textAlign: "center", color: "navy" }}>
          {`${score}% `}
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            this.props.navigation.navigate("Quize", {
              deckName,
              Quize: "Quize"
            })
          }
        >
          <Text style={styles.txt}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            this.props.navigation.navigate("DeckView", {
              deckName,
              Quize: "Quize"
            })
          }
        >
          <Text style={styles.txt}>Back To Deck</Text>
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
    justifyContent: "center",
    padding: 10
  },
  buttonStyle: {
    backgroundColor: "skyblue",
    margin: 10,
    padding: 10,
    width: 200
  },
  buttonStyleDanger: {
    margin: 10,
    padding: 10,
    width: 200,
    backgroundColor: "red"
  },
  txt: {
    color: "white",
    textAlign: "center"
  },
  titleText: {
    fontSize: 40,
    color: "skyblue",
    textAlign: "center"
  }
});

const mapStateToProps = decks => {
  return {
    decks
  };
};
export default connect(mapStateToProps)(Result);
