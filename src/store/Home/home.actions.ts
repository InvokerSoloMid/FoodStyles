import { ICard } from "../../definitions/interfaces";
import { createAction } from "../../utils/helpers/redux";
import { HomeActions } from "./home.types";

export const getCardsAction = () => createAction(HomeActions.GET_CARDS);
export const addCardAction = (card: ICard) => createAction(HomeActions.ADD_CARD, card);
export const setCardsAction = (cards: ICard[]) => createAction(HomeActions.SET_CARDS, cards);