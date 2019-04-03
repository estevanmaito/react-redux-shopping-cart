import reducer, { initialState } from "../../redux/reducer";
import {
  CART_ADD_PRODUCT,
  CART_REMOVE_PRODUCT,
  CART_RESET
} from "../../redux/actions";

const payload = {
  imgUrl:
    "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
  name: "'70s RETRO GLAM KEFIAH",
  price: 20
};

describe("cart reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe("add product", () => {
    it("should add a new product to the cart", () => {
      const expectedCart = [
        {
          imgUrl:
            "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
          name: "'70s RETRO GLAM KEFIAH",
          price: 20,
          quantity: 1
        }
      ];

      const action = { type: CART_ADD_PRODUCT, payload };

      expect(reducer(initialState, action).cart).toEqual(expectedCart);
    });

    it("should not add a new product to the cart if it already exists", () => {
      const cart = [
        {
          imgUrl:
            "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
          name: "'70s RETRO GLAM KEFIAH",
          price: 20,
          quantity: 1
        }
      ];

      const expectedCart = [
        {
          imgUrl:
            "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
          name: "'70s RETRO GLAM KEFIAH",
          price: 20,
          quantity: 2
        }
      ];

      const action = { type: CART_ADD_PRODUCT, payload };
      const initialStateWithItemInCart = { ...initialState, cart };

      expect(reducer(initialStateWithItemInCart, action).cart).toHaveLength(1);
      expect(reducer(initialStateWithItemInCart, action).cart).toEqual(
        expectedCart
      );
    });
  });

  describe("remove a product", () => {
    it("should remove a product from the cart", () => {
      const action = { type: CART_REMOVE_PRODUCT, payload };

      expect(reducer({ ...initialState, cart: [payload] }, action)).toEqual(
        initialState
      );
    });
  });

  describe("reset cart", () => {
    it("should reset the cart", () => {
      const action = { type: CART_RESET };

      expect(reducer({ ...initialState, cart: [payload] }, action)).toEqual(
        initialState
      );
    });
  });
});
