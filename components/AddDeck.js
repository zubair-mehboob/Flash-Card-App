import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { saveDeckTitle } from "../utils/api";
import { addDeck } from "../actions";
import { connect } from "react-redux";
class AddDeck extends Component {
  state = {
    text: ""
  };
  handleTitleInput = text => {
    this.setState({
      text
    });
  };

  submitName = () => {
    const { text } = this.state;
    saveDeckTitle(text);
    this.props.dispatch(addDeck(text));
    this.props.navigation.navigate("DeckView", { entryId: text });
    this.setState({ text: "" });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>What is the Deck title?</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleTitleInput}
          value={this.state.text}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={this.submitName}>
          <Text style={styles.txt}>Submit</Text>
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
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: "skyblue",
    margin: 50,
    borderRadius: 10
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
  }
});

export default connect()(AddDeck);
