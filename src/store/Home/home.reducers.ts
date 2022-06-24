const initialState = {
  cards: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_CARDS": {
      return {
        ...state,
        cards: action?.payload || [],
      };
    }
    case "ADD_CARD": {
      return {
        ...state,
        cards: [
          ...state?.cards,
          action?.payload
        ],
      };
    }

    default:
      return state;
  }
};
