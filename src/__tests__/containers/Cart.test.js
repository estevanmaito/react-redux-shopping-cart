import React from "react";
import { shallow, mount } from "enzyme";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../../redux/reducer";

import CartComponent, {
  Cart,
  getTotalItemsInCart
} from "../../containers/Cart";
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

    expect(wrapper.find("CartItemCount").text()).toEqual("0");
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

describe("<Cart> integration", () => {
  it("should render 0 as initial cart items count", () => {
    const store = createStore(reducer);
    const wrapper = mount(
      <Provider store={store}>
        <CartComponent />
      </Provider>
    );

    expect(store.getState().cart.items).toHaveLength(0);
    expect(wrapper.find("CartItemCount").text()).toBe("0");
  });

  it("should render 3 if there is 2 products but with 3 units of them", () => {
    const initialState = {
      cart: {
        items: [{ quantity: 1 }, { quantity: 2 }]
      }
    };
    const store = createStore(reducer, initialState);
    const wrapper = mount(
      <Provider store={store}>
        <CartComponent />
      </Provider>
    );

    expect(store.getState().cart.items).toHaveLength(2);
    expect(wrapper.find("CartItemCount").text()).toBe("3");
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
