import React from "react";
import { shallow } from "enzyme";
import { Navbar } from "../../containers/Navbar";
import Cart from "../../containers/Cart";

describe("<Navbar> unit", () => {
  it("should render the navbar with a cart", () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper.find(Cart)).toHaveLength(1);
  });
});
