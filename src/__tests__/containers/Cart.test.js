import React from "react";
import { shallow } from "enzyme";

import { Cart, getTotalItemsInCart } from "../../containers/Cart";
import CartList from "../../containers/CartList";

const props = {
  cart: {
    items: [],
    totalPrice: 0
  }
};

describe("<Cart> unit", () => {
  it("should render the total number of products in the cart", () => {
    const wrapper = shallow(<Cart {...props} />);

    expect(wrapper.find("span").text()).toEqual("0");
  });

  it("should render without CartList", () => {
    const wrapper = shallow(<Cart {...props} />);

    expect(wrapper.find(CartList)).toHaveLength(0);
  });

  it("should render CartList on click", () => {
    const wrapper = shallow(<Cart {...props} />);

    wrapper.find("ClickableElement").simulate("click");

    expect(wrapper.find(CartList)).toHaveLength(1);
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
