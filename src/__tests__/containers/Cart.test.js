import React from "react";
import { shallow } from "enzyme";

import { Cart, getTotalItemsInCart } from "../../containers/Cart";

const props = {
  cart: []
};

describe("<Cart> unit", () => {
  it("should render the total number of products in the cart", () => {
    const wrapper = shallow(<Cart {...props} />);

    expect(wrapper.find("span").text()).toEqual("0");
  });
});

describe("getTotalItemsInCart", () => {
  it("should return 0 the cart is empty", () => {
    const cart = [];

    expect(getTotalItemsInCart(cart)).toEqual(0);
  });

  it("should return the sum of item quantities in the cart", () => {
    const cart = [{ quantity: 2 }, { quantity: 5 }];

    expect(getTotalItemsInCart(cart)).toEqual(7);
  });
});
