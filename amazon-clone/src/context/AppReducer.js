export const initialState = {
  basket: [],
  user: null,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const newBasketCopie = [...state.basket];
      const newBasket = newBasketCopie.filter((item) => item.id !== action.id);
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default AppReducer;
