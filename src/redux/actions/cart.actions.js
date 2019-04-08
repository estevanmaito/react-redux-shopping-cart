export const CART_ADD_PRODUCT = "CART_ADD_PRODUCT";
export const CART_REMOVE_PRODUCT = "CART_REMOVE_PRODUCT";
export const CART_RESET = "CART_REST";
export const CART_UPDATE_TOTAL_PRICE = "CART_UPDATE_TOTAL_PRICE";
export const CART_DESCREASE_PRODUCT_QUANTITY =
  "CART_DESCREASE_PRODUCT_QUANTITY";

export function cartAddOrIncrementProduct(payload) {
  return dispatch => {
    dispatch({ type: CART_ADD_PRODUCT, payload });
    dispatch({ type: CART_UPDATE_TOTAL_PRICE });
  };
}

export function cartRemoveProduct(payload) {
  return dispatch => {
    dispatch({ type: CART_REMOVE_PRODUCT, payload });
    dispatch({ type: CART_UPDATE_TOTAL_PRICE });
  };
}

export function cartReset() {
  return dispatch => {
    dispatch({ type: CART_RESET });
    dispatch({ type: CART_UPDATE_TOTAL_PRICE });
  };
}

export function cartDecreaseProductQuantity(payload) {
  return dispatch => {
    dispatch({ type: CART_DESCREASE_PRODUCT_QUANTITY, payload });
    dispatch({ type: CART_UPDATE_TOTAL_PRICE });
  };
}
