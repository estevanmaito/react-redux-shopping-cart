import React from "react";
import { shallow } from "enzyme";
import App from "../App";

import ProductList from "../ProductList";

describe("<App> unit", () => {
  it("should render a Navbar and ProductList components", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("Navbar")).toHaveLength(1);
    // Connected component must be compared to the default export
    expect(wrapper.find(ProductList)).toHaveLength(1);
  });
});
