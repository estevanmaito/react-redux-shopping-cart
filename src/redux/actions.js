export const CART_ADD_PRODUCT = "CART_ADD_PRODUCT";
export const CART_REMOVE_PRODUCT = "CART_REMOVE_PRODUCT";
export const CART_RESET = "CART_REST";
export const CART_UPDATE_TOTAL_PRICE = "CART_UPDATE_TOTAL_PRICE";

export function cartAddProduct(payload) {
  return { type: CART_ADD_PRODUCT, payload };
}

export function cartRemoveProduct(payload) {
  return { type: CART_REMOVE_PRODUCT, payload };
}

export function cartReset() {
  return { type: CART_RESET };
}

export function cartUpdateTotalPrice() {
  return { type: CART_UPDATE_TOTAL_PRICE };
}

export function cartAddProductAndUpdateTotalPrice(payload) {
  return dispatch => {
    dispatch(cartAddProduct(payload));
    dispatch(cartUpdateTotalPrice());
  };
}
