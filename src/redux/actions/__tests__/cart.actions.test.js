import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  CART_ADD_PRODUCT,
  CART_REMOVE_PRODUCT,
  CART_RESET,
  CART_UPDATE_TOTAL_PRICE,
  CART_DESCREASE_PRODUCT_QUANTITY
} from "../cart.actions";

import {
  cartAddOrIncrementProduct,
  cartRemoveProduct,
  cartReset,
  cartUpdateTotalPrice,
  cartDecreaseProductQuantity
} from "../cart.actions";

const payload = {
  id: 1,
  imgUrl:
    "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
  name: "'70s RETRO GLAM KEFIAH",
  price: 20
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("cart actions", () => {
  const store = mockStore();

  afterEach(() => {
    store.clearActions();
  });

  describe("cartAddProduct", () => {
    it("should return the correct type and payload when add product", () => {
      store.dispatch(cartAddOrIncrementProduct(payload));

      const actual = store.getActions();
      const expected = [
        {
          type: CART_ADD_PRODUCT,
          payload
        },
        {
          type: CART_UPDATE_TOTAL_PRICE
        }
      ];

      expect(actual).toEqual(expected);
    });
  });

  describe("cartRemoveProduct", () => {
    it("should return the correct type and payload when removing product", () => {
      store.dispatch(cartRemoveProduct(payload));

      const actual = store.getActions();
      const expected = [
        {
          type: CART_REMOVE_PRODUCT,
          payload
        },
        {
          type: CART_UPDATE_TOTAL_PRICE
        }
      ];

      expect(actual).toEqual(expected);
    });
  });

  describe("cartReset", () => {
    it("should return the correct type when reseting the cart", () => {
      store.dispatch(cartReset(payload));

      const actual = store.getActions();
      const expected = [
        {
          type: CART_RESET
        },
        {
          type: CART_UPDATE_TOTAL_PRICE
        }
      ];

      expect(actual).toEqual(expected);
    });
  });

  describe("cartDecreaseProductQuantity", () => {
    it("should return the correct type", () => {
      store.dispatch(cartDecreaseProductQuantity(payload));

      const actual = store.getActions();
      const expected = [
        {
          type: CART_DESCREASE_PRODUCT_QUANTITY,
          payload
        },
        {
          type: CART_UPDATE_TOTAL_PRICE
        }
      ];

      expect(actual).toEqual(expected);
    });
  });
});
