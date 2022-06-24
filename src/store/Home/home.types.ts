import {
  ActionCreator,
  ActionGroupCreator,
  PickAction,
  PickRequestAction,
} from "../types/redux.types";

export enum HomeActions {
  GET_CARDS = "GET_CARDS",
  SET_CARDS = "SET_CARDS",
  ADD_CARD = "ADD_CARD",
  DELETE_CARD = "DELETE_CARD",
}
export type Actions =
  | ActionGroupCreator<HomeActions.GET_CARDS, any, any>
  | ActionGroupCreator<HomeActions.SET_CARDS, any, any>
  | ActionGroupCreator<HomeActions.ADD_CARD, any, any>
  | ActionGroupCreator<HomeActions.DELETE_CARD, any, any>;
export type RequestAction<ActionName> = PickRequestAction<Actions, ActionName>;
export type Action<T extends Actions["type"]> = PickAction<Actions, T>;
export interface IDefaultResponse {
  success: boolean;
  message: string | null;
}
