import {
  CART_ADD_PRODUCT,
  CART_REMOVE_PRODUCT,
  CART_RESET,
  CART_UPDATE_TOTAL_PRICE
} from "../../redux/actions";

import {
  cartAddProduct,
  cartRemoveProduct,
  cartReset,
  cartUpdateTotalPrice,
  cartAddProductAndUpdateTotalPrice
} from "../../redux/actions";

const payload = {
  imgUrl:
    "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
  name: "'70s RETRO GLAM KEFIAH",
  price: 20
};

describe("cart actions", () => {
  describe("cartAddProduct", () => {
    it("should return the correct type and payload when add product", () => {
      expect(cartAddProduct(payload)).toEqual({
        type: CART_ADD_PRODUCT,
        payload
      });
    });
  });

  describe("cartRemoveProduct", () => {
    it("should return the correct type and payload when removing product", () => {
      expect(cartRemoveProduct(payload)).toEqual({
        type: CART_REMOVE_PRODUCT,
        payload
      });
    });
  });

  describe("cartReset", () => {
    it("should return the correct type when reseting the cart", () => {
      expect(cartReset()).toEqual({
        type: CART_RESET
      });
    });
  });

  describe("cartUpdateTotalPrice", () => {
    it("should return the correct type when update the cart total price", () => {
      expect(cartUpdateTotalPrice()).toEqual({
        type: CART_UPDATE_TOTAL_PRICE
      });
    });
  });

  describe("cartAddProductAndUpdateTotaPrie", () => {
    it("should return the correct type", () => {
      // expect(cartAddProductAndUpdateTotalPrice(payload)).toEqual({
      //   type: CART_UPDATE_TOTAL_PRICE
      // });
    });
  });
});
