import {
  CART_ADD_PRODUCT,
  CART_REMOVE_PRODUCT,
  CART_RESET,
  CART_UPDATE_TOTAL_PRICE,
  CART_DESCREASE_PRODUCT_QUANTITY
} from "../actions/cart.actions";

export default function cart(state = initialState, { payload, type }) {
  switch (type) {
    case CART_ADD_PRODUCT:
      return cartAddProduct(state, payload);
    case CART_REMOVE_PRODUCT:
      return cartRemoveProduct(state, payload);
    case CART_DESCREASE_PRODUCT_QUANTITY:
      return cartDecreaseProdcutQuantity(state, payload);
    case CART_RESET:
      return cartReset(state, initialState);
    case CART_UPDATE_TOTAL_PRICE:
      return cartUpdateTotalPrice(state);
    default:
      return state;
  }
}

export const initialState = {
  items: [],
  totalPrice: 0
};

function cartAddProduct(state, payload) {
  const itemExists = state.items.find(i => i.id === payload.id);
  if (itemExists) {
    return {
      ...state,
      items: state.items.map(i => {
        return i.id === payload.id ? { ...i, quantity: i.quantity + 1 } : i;
      })
    };
  }
  return {
    ...state,
    items: [...state.items, { ...payload, quantity: 1 }]
  };
}

function cartRemoveProduct(state, payload) {
  return {
    ...state,
    items: state.items.filter(product => {
      return product.id !== payload.id;
    })
  };
}

function cartDecreaseProdcutQuantity(state, payload) {
  return {
    ...state,
    items: state.items.map(i => {
      return i.id === payload.id ? { ...i, quantity: i.quantity - 1 } : i;
    })
  };
}

function cartReset(state, initialState) {
  return {
    ...state,
    cart: initialState.cart
  };
}

function cartUpdateTotalPrice(state) {
  return {
    ...state,
    totalPrice: state.items.reduce((acc, i) => acc + i.price * i.quantity, 0)
  };
}
