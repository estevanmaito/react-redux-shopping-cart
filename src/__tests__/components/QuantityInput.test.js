import React from "react";
import { shallow } from "enzyme";

import { QuantityInput } from "../../components/QuantityInput";

describe("<QuantityInput> unit", () => {
  it("should render without breaking", () => {
    const wrapper = shallow(<QuantityInput />);

    expect(wrapper.find("Input")).toHaveLength(1);
  });
});
