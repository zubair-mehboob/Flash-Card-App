import { ADD_DECK, ADD_CARD_TO_DECK, RECIEVE_DECKS } from "../actions";

export const deck = (state = {}, action) => {
  switch (action.type) {
    case ADD_DECK:
      const newDeck = {
        [action.deck]: {
          title: action.deck,
          questions: []
        }
      };

      return {
        ...state,
        [action.deck]: {
          title: action.deck,
          questions: []
        }
      };
    case RECIEVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_CARD_TO_DECK:
      const { question, answer, deck, correctAnswer } = action.card;
      return {
        ...state,
        [deck]: {
          ...state[deck],
          questions: [
            ...state[deck].questions,
            { question, answer, correctAnswer }
          ]
        }
      };
    default:
      return state;
  }
};

export default deck;
