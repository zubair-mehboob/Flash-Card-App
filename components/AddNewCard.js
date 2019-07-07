import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { addCard } from "../actions";
import { connect } from "react-redux";
import { saveCard } from "../utils/api";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: "blue",
    margin: 50
  },
  buttonStyle: {
    backgroundColor: "skyblue",
    margin: 10,
    padding: 10,
    width: 200
  },
  txt: {
    color: "white",
    textAlign: "center"
  }
});

class AddNewCard extends Component {
  state = {
    question: "",
    answer: "",
    correctAnswer: ""
  };
  submitCard = deck => {
    const { question, answer, correctAnswer } = this.state;
    this.props.dispatch(addCard({ question, answer, correctAnswer, deck }));
    saveCard({ question, answer, correctAnswer, deck });
    this.props.navigation.navigate("DeckView");
    this.setState({ question: "", answer: "", correctAnswer: "" });
  };
  render() {
    const deckName = this.props.navigation.state.params.entryId;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <Text>What is the question?</Text>
          <TextInput
            style={styles.input}
            onChangeText={question => this.setState({ question })}
          />
          <Text>What is the answer?</Text>
          <TextInput
            style={styles.input}
            onChangeText={answer => this.setState({ answer })}
          />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.submitCard(deckName)}
          >
            <Text style={styles.txt}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(AddNewCard);
