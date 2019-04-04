import reducer, { initialState } from "../../redux/reducer";
import {
  CART_ADD_PRODUCT,
  CART_REMOVE_PRODUCT,
  CART_RESET,
  CART_UPDATE_TOTAL_PRICE
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
      const expectedCartItems = [
        {
          imgUrl:
            "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
          name: "'70s RETRO GLAM KEFIAH",
          price: 20,
          quantity: 1
        }
      ];

      const action = { type: CART_ADD_PRODUCT, payload };

      expect(reducer(initialState, action).cart.items).toEqual(
        expectedCartItems
      );
    });

    it("should not add a new product to the cart if it already exists", () => {
      const cart = {
        items: [
          {
            imgUrl:
              "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            name: "'70s RETRO GLAM KEFIAH",
            price: 20,
            quantity: 1
          }
        ]
      };

      const expectedCart = {
        items: [
          {
            imgUrl:
              "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            name: "'70s RETRO GLAM KEFIAH",
            price: 20,
            quantity: 2
          }
        ]
      };

      const action = { type: CART_ADD_PRODUCT, payload };
      const initialStateWithItemInCart = { ...initialState, cart };

      expect(
        reducer(initialStateWithItemInCart, action).cart.items
      ).toHaveLength(1);
      expect(reducer(initialStateWithItemInCart, action).cart).toEqual(
        expectedCart
      );
    });
  });

  describe("remove a product", () => {
    it("should remove a product from the cart", () => {
      const action = { type: CART_REMOVE_PRODUCT, payload };

      expect(
        reducer(
          { ...initialState, cart: { items: [payload], totalPrice: 0 } },
          action
        )
      ).toEqual(initialState);
    });
  });

  describe("reset cart", () => {
    it("should reset the cart", () => {
      const action = { type: CART_RESET };

      expect(
        reducer({ ...initialState, cart: { items: [payload] } }, action)
      ).toEqual(initialState);
    });
  });

  describe("update the total price", () => {
    it("should update the total price with one item", () => {
      const cart = {
        items: [
          {
            imgUrl:
              "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            name: "'70s RETRO GLAM KEFIAH",
            price: 20,
            quantity: 1
          }
        ],
        totalPrice: 0
      };

      const action = { type: CART_UPDATE_TOTAL_PRICE };

      expect(
        reducer({ ...initialState, cart }, action).cart.totalPrice
      ).toEqual(payload.price);
    });

    it("should update the total price with two products", () => {
      const cart = {
        items: [
          {
            imgUrl:
              "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            name: "'70s RETRO GLAM KEFIAH",
            price: 20,
            quantity: 1
          },
          {
            imgUrl:
              "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            name: "'70s RETRO GLAM KEFIAH",
            price: 40,
            quantity: 1
          }
        ],
        totalPrice: 0
      };

      const action = { type: CART_UPDATE_TOTAL_PRICE };

      expect(
        reducer({ ...initialState, cart }, action).cart.totalPrice
      ).toEqual(60);
    });
  });
});
