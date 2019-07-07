import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { getDecks } from "../utils/api";
import { connect } from "react-redux";
import { recieveDecks } from "../actions";

class Quize extends Component {
  state = {
    questionNum: 0,
    answerFlag: false
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
          questionNum: prevState.questionNum + 1,
          answerFlag: false
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
    const { questionNum, answerFlag } = this.state;
    console.log("from render", answerFlag);

    return (
      <View>
        <Text>Quize</Text>
        <Text>
          {questionNum < questions.length
            ? questions[[questionNum]].question
            : `End Of Quiz`}
        </Text>
        {!answerFlag ? (
          <Button
            onPress={() => this.setState({ answerFlag: !answerFlag })}
            title="Answer"
          />
        ) : (
          <Text>{questions[questionNum].answer}</Text>
        )}
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
