import { FETCH_PRODUCTS } from "../actions/products.actions";

export default function products(state = [], { payload, type }) {
  switch (type) {
    case FETCH_PRODUCTS:
      return payload;
    default:
      return state;
  }
}
