import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

export function fetchProducts() {
  return dispatch => {
    return axios.get("http://localhost:4000/products").then(response =>
      dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data
      })
    );
  };
}
