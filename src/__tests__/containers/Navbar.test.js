import React from "react";
import { shallow } from "enzyme";
import { Navbar } from "../../containers/Navbar";

describe("<Navbar> unit", () => {
  it("should render the navbar with an empty cart", () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper.contains("Cart")).toBe(true);
  });
});
