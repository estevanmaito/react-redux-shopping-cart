import reducer from "../products.reducer";
import { FETCH_PRODUCTS } from "../../actions/products.actions";

const payload = [
  {
    id: 1,
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
    name: "Check Print Shirt",
    price: 110
  },
  {
    id: 2,
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
    name: "Gloria High Logo Sneaker",
    price: 91
  }
];

describe("products reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  describe("fetch products", () => {
    it("should fetch products", () => {
      const action = { type: FETCH_PRODUCTS, payload };

      const actual = reducer(undefined, action);

      expect(actual).toEqual(payload);
    });
  });
});
