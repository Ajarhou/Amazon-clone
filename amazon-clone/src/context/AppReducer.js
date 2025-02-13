export const initialState = {
  basket: [],
  user: null,
  email: "",
  password: "",
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return {
        ...state,
        email: action.email,
      };
    case "UPDATE_PASSWORD":
      return {
        ...state,
        password: action.password,
      };
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
      case "EMPTY_BASKET":
        return{
          ...state,
          basket:[],
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
