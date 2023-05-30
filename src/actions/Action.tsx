import AsyncStorage from '@react-native-async-storage/async-storage';
import BusinessCard from '../models/BusinessCard';
import {ActionTypes} from './ActionTypes';
import {Action, Dispatch} from 'redux';
import {RootState} from '../store/store';

export const saveBusinessCard = (card: BusinessCard) => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {
    try {
      const cards = getState().cardReducer.cards;
      card.id = cards.length + 1;
      const newCards = [...cards, card];
      await AsyncStorage.setItem('businessCards', JSON.stringify(newCards));
      dispatch({
        type: ActionTypes.SAVE_BUSINESS_CARD,
        payload: newCards,
      });
    } catch (error) {
      console.log('Error saving business card: ', error);
    }
  };
};

export const fetchAllSavedCards = () => {
  try {
    return async (dispatch: Dispatch<Action>) => {
      const response = await AsyncStorage.getItem('businessCards');
      if (response) {
        const businessCards: BusinessCard[] = JSON.parse(response);
        dispatch<any>({
          type: ActionTypes.LOAD_BUSINESS_CARD,
          payload: businessCards,
        });
      } else {
        console.log('Unable to fetch data from the local storage');
      }
    };
  } finally {
  }
};

export const deleteBusinessCard = (card: BusinessCard) => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {
    try {
      const cards = getState().cardReducer.cards;
      cards.filter(item => item.id !== card.id);
      await AsyncStorage.setItem('businessCards', JSON.stringify(cards));
      dispatch({
        type: ActionTypes.REMOVE_BUSINESS_CARD,
        payload: cards,
      });
    } catch (error) {
      console.log('Error removing a business card: ', error);
    }
  };
};
