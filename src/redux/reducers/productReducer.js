import { ActionTypes } from "../constants/action-types"

const initialState = {
    products: []
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}
  
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.ADD_TO_CART:
        const newItem = action.payload;
        const itemInCart = state.products.find((item) => item.id === newItem.id);
        if (itemInCart) {
          return {
            ...state,
            products: state.products.map((item) =>
              item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        } else {
          return {
            ...state,
            products: [...state.products, { ...newItem, quantity: 1 }],
          };
        }
      case ActionTypes.REMOVE_FROM_CART:
        return {
          ...state,
          products: state.products
            .map((item) => (item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item))
            .filter((item) => item.quantity > 0),
        };
      default:
        return state;
    }
  };
  