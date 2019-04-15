import React from "react";
import { shallow } from "enzyme";

import { QuantityInput } from "../QuantityInput";

describe("<QuantityInput> unit", () => {
  it("should render without breaking", () => {
    const wrapper = shallow(<QuantityInput />);

    expect(wrapper.find("Quantity")).toHaveLength(1);
    expect(wrapper.find("Button")).toHaveLength(2);
  });
});

describe("<QuantityInput> integration", () => {
  const props = {
    onDecrement: jest.fn(),
    onIncrement: jest.fn(),
    quantity: 2
  };

  const wrapper = shallow(<QuantityInput {...props} />);
  it("should call onDecrement on first button click", () => {
    const firstButton = wrapper.find("Button").at(0);
    firstButton.props().onClick();

    expect(props.onDecrement).toHaveBeenCalled();
  });

  it("should call onIncrement on second button click", () => {
    const secondButton = wrapper.find("Button").at(1);
    secondButton.props().onClick();

    expect(props.onIncrement).toHaveBeenCalled();
  });
});
