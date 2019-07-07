import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { getDecks } from "../utils/api";
import { connect } from "react-redux";
import { recieveDecks } from "../actions";

class Quize extends Component {
  state = {
    questionNum: 0
  };

  nextQuestion = num => {
    const { decks } = this.props;
    const deckName = this.props.navigation.state.params.entryId;
    const questions = decks[deckName].questions;
    const { questionNum } = this.state;
    if (questionNum < questions.length) {
      console.log("Element: ", questions[questionNum]);
      this.setState(prevState => {
        return {
          questionNum: prevState.questionNum + 1
        };
      });
    } else {
      console.log("Questions End");
    }
    // console.log(questions);
  };

  render() {
    const { decks } = this.props;
    const deckName = this.props.navigation.state.params.entryId;
    const questions = decks[deckName].questions;
    const { questionNum } = this.state;
    // console.log("from render", questionNum);

    return (
      <View>
        <Text>Quize</Text>
        <Text>{questions[[questionNum]].question}</Text>
        <Button onPress={() => this.nextQuestion(questionNum)} title="next" />
      </View>
    );
  }
}
const mapStateToProps = decks => {
  return {
    decks
  };
};

export default connect(mapStateToProps)(Quize);
