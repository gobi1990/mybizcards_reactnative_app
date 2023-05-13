import {ActionTypes} from '../actions/ActionTypes';
import BusinessCard from '../models/BusinessCard';

export interface CardState {
  cards: BusinessCard[];
}

const initialState: CardState = {
  cards: [],
};

const cardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SAVE_BUSINESS_CARD: {
      const {id, card} = action.payload;
      return {
        ...state,
        cards: [...state.cards, {id, ...card}],
      };
    }
    case ActionTypes.LOAD_BUSINESS_CARD: {
      return {
        ...state,
        cards: action.payload,
      };
    }
    case ActionTypes.REMOVE_BUSINESS_CARD: {
      return {
        ...state,
        cards: action.payload,
      };
    }
    default:
      return state;
  }
};

export default cardReducer;
