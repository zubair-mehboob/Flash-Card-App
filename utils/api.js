import { AsyncStorage } from "react-native";
const FLASHCARD_STORAGE_KEY = "flashcards: decks";
const InitialData = {
  Geography: {
    title: "Geography",
    questions: [
      {
        question: "Is South Africa a country?",
        answer: "No, It's just a region",
        correctAnswer: "false"
      },
      {
        question: "Which US state is next to California?",
        answer: "New York",
        correctAnswer: "false"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "what is array",
        answer: "A set of elements is called an array",
        correctAnswer: "true"
      },
      {
        question: "What is a variable",
        answer: "Something that stores information",
        correctAnswer: "true"
      }
    ]
  }
};

export function getDecks(deck) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(result => {
    if (result === null) {
      AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(InitialData));
      return InitialData;
    } else {
      JSON.parse(result);
    }
  });
}

export const getData = () => {
  return InitialData;
};
