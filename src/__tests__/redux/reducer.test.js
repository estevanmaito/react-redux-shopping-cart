import reducer, { initialState } from "../../redux/reducer";
import {
  CART_ADD_PRODUCT,
  CART_REMOVE_PRODUCT,
  CART_RESET,
  CART_UPDATE_TOTAL_PRICE,
  CART_DESCREASE_PRODUCT_QUANTITY
} from "../../redux/actions";

const payload = {
  id: 1,
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
      const action = { type: CART_ADD_PRODUCT, payload };

      const actual = reducer(undefined, action).cart.items;
      const expected = [
        {
          id: 1,
          imgUrl:
            "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
          name: "'70s RETRO GLAM KEFIAH",
          price: 20,
          quantity: 1
        }
      ];

      expect(actual).toEqual(expected);
    });

    it("should not add a new product to the cart if it already exists", () => {
      const action = { type: CART_ADD_PRODUCT, payload };
      const cart = {
        items: [
          {
            id: 1,
            imgUrl:
              "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            name: "'70s RETRO GLAM KEFIAH",
            price: 20,
            quantity: 1
          }
        ]
      };

      const actual = reducer({ ...initialState, cart }, action);
      const expected = {
        items: [
          {
            id: 1,
            imgUrl:
              "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            name: "'70s RETRO GLAM KEFIAH",
            price: 20,
            quantity: 2
          }
        ]
      };

      expect(actual.cart.items).toHaveLength(1);
      expect(actual.cart).toEqual(expected);
    });
  });

  describe("remove a product", () => {
    it("should remove a product from the cart", () => {
      const action = { type: CART_REMOVE_PRODUCT, payload };
      const anotherItem = {
        id: 2,
        imgUrl:
          "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        name: "Gloria High Logo Sneaker",
        price: 91
      };

      // cart with 2 items
      const actual = reducer(
        {
          ...initialState,
          cart: {
            items: [payload, anotherItem],
            totalPrice: 0
          }
        },
        action
      );

      const expected = {
        ...initialState,
        cart: {
          items: [anotherItem],
          totalPrice: 0
        }
      };

      expect(actual).toEqual(expected);
    });
  });

  describe("cart descrease item quantity", () => {
    it("should decrease quantity of a product in the cart", () => {
      const action = { type: CART_DESCREASE_PRODUCT_QUANTITY, payload };
      const cart = {
        items: [
          {
            id: 1,
            imgUrl:
              "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            name: "'70s RETRO GLAM KEFIAH",
            price: 20,
            quantity: 2
          }
        ]
      };

      const actual = reducer({ ...initialState, cart }, action);

      const expected = {
        items: [
          {
            id: 1,
            imgUrl:
              "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            name: "'70s RETRO GLAM KEFIAH",
            price: 20,
            quantity: 1
          }
        ]
      };

      expect(actual.cart.items).toHaveLength(1);
      expect(actual.cart).toEqual(expected);
    });
  });

  describe("reset cart", () => {
    it("should reset the cart", () => {
      const action = { type: CART_RESET };

      const actual = reducer(
        {
          ...initialState,
          cart: { items: [payload] }
        },
        action
      );

      expect(actual).toEqual(initialState);
    });
  });

  describe("update the total price", () => {
    it("should update the total price with one item", () => {
      const action = { type: CART_UPDATE_TOTAL_PRICE };
      const cart = {
        items: [
          {
            id: 1,
            imgUrl:
              "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            name: "'70s RETRO GLAM KEFIAH",
            price: 20,
            quantity: 1
          }
        ],
        totalPrice: 0
      };

      const actual = reducer({ ...initialState, cart }, action);

      const expected = payload.price;

      expect(actual.cart.totalPrice).toEqual(expected);
    });

    it("should update the total price with two products", () => {
      const action = { type: CART_UPDATE_TOTAL_PRICE };
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

      const actual = reducer({ ...initialState, cart }, action);

      const expected = 60;

      expect(actual.cart.totalPrice).toEqual(expected);
    });
  });
});
