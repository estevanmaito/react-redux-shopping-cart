import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";

import { FETCH_PRODUCTS } from "../products.actions";

import { fetchProducts } from "../products.actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("axios");

describe("product actions", () => {
  const store = mockStore();

  afterEach(() => {
    store.clearActions();
  });

  describe("fetchProducts", () => {
    const response = {
      data: {
        products: [
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
        ]
      }
    };
    it("should return the products from server", async () => {
      axios.get.mockResolvedValue(response);
      await store.dispatch(fetchProducts());

      const actual = store.getActions();
      const expected = [
        {
          type: FETCH_PRODUCTS,
          payload: response.data
        }
      ];

      expect(actual).toEqual(expected);
    });
  });
});
