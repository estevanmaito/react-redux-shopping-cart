import {
  CART_ADD_PRODUCT,
  CART_REMOVE_PRODUCT,
  CART_RESET,
  CART_UPDATE_TOTAL_PRICE,
  CART_DESCREASE_PRODUCT_QUANTITY
} from "../actions/cart.actions";

export const initialState = {
  items: [],
  totalPrice: 0
};

export default function cart(state = initialState, { payload, type }) {
  switch (type) {
    case CART_ADD_PRODUCT:
      const itemExists = state.items.find(i => i.id === payload.id);
      if (itemExists) {
        return {
          ...state,
          items: state.items.map(i => {
            return i.id === payload.id ? { ...i, quantity: i.quantity + 1 } : i;
          })
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...payload, quantity: 1 }]
        };
      }
    case CART_REMOVE_PRODUCT:
      return {
        ...state,
        items: state.items.filter(product => {
          return product.id !== payload.id;
        })
      };
    case CART_DESCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        items: state.items.map(i => {
          return i.id === payload.id ? { ...i, quantity: i.quantity - 1 } : i;
        })
      };
    case CART_RESET:
      return {
        ...state,
        cart: initialState.cart
      };
    case CART_UPDATE_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: state.items.reduce(
          (acc, i) => acc + i.price * i.quantity,
          0
        )
      };
    default:
      return state;
  }
}
