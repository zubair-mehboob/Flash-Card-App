import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";

import { connect } from "react-redux";

class Quize extends Component {
  state = {
    questionNum: 0,
    answerFlag: false,

    score: 0
  };

  nextQuestion = (num, userGues) => {
    const { decks } = this.props;
    const deckName = this.props.navigation.state.params.entryId;
    const questions = decks[deckName].questions;
    const { questionNum, score } = this.state;
    if (questionNum < questions.length - 1) {
      //console.log("CorrectAnswer: ", questions[questionNum].correctAnswer);
      //console.log("UserGues: ", userGues);
      this.setState(prevState => {
        return {
          questionNum: prevState.questionNum + 1,
          answerFlag: false,
          score:
            userGues === questions[questionNum].correctAnswer
              ? prevState.score + 1
              : prevState.score
        };
      });
    } else {
      //console.log("in else");
      this.setState(prevState => {
        return {
          answerFlag: false,
          score:
            userGues === questions[questions.length - 1].correctAnswer
              ? prevState.score + 1
              : prevState.score
        };
      });

      this.props.navigation.navigate("Result", {
        entryId: this.state.score,
        questionLength: decks[deckName].questions.length,
        deckName: deckName
      });
      //console.log("Questions End");
    }
    // console.log(questions);
  };
  // componentDidMount() {
  //   refresh = () => {
  //     this.setState({ score: 0, questionNum: 0 });
  //   };
  // }

  render() {
    // const Quize = this.props.navigation.state.params.Quize;
    // console.log("Quize", Quize);

    // if (Quize) {
    //   console.log("Invoked refresh");
    //   refresh();
    // }
    const { decks } = this.props;
    const deckName = this.props.navigation.state.params.entryId;
    const questions = decks[deckName].questions;
    const { questionNum, answerFlag, score } = this.state;
    //console.log("from render score", score);

    return (
      <View style={styles.container}>
        <Text
          style={{ color: "purple", fontSize: 18, margin: 10 }}
        >{`Question: ${questionNum + 1}/${questions.length}`}</Text>
        <Text style={styles.titleText}>
          {questionNum < questions.length
            ? questions[[questionNum]].question
            : `End Of Quiz`}
        </Text>
        {!answerFlag ? (
          <TouchableOpacity
            onPress={() => this.setState({ answerFlag: !answerFlag })}
          >
            <Text style={{ color: "blue", fontSize: 20, margin: 10 }}>
              Show Answer
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={{ color: "red", fontStyle: "italic", fontSize: 20 }}>
            {questions[questionNum].answer}
          </Text>
        )}

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => this.nextQuestion(questionNum, "true")}
        >
          <Text style={styles.txt}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyleDanger}
          onPress={() => this.nextQuestion(questionNum, "false")}
        >
          <Text style={styles.txt}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = decks => {
  return {
    decks
  };
};

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

export default connect(mapStateToProps)(Quize);
