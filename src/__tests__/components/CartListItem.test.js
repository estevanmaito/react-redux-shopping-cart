import React from "react";
import { shallow } from "enzyme";

import { CartListItem } from "../../components/CartListItem";

describe("<CartListItem> unit", () => {
  it("should render without breaking", () => {
    const props = {
      id: 1,
      imgUrl:
        "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      name: "'70s RETRO GLAM KEFIAH",
      price: 20,
      quantity: 2
    };

    const wrapper = shallow(<CartListItem {...props} />);

    expect(wrapper.contains("'70s RETRO GLAM KEFIAH")).toBe(true);
  });
});

describe("<CartListItem> integration", () => {
  it("should call cartAddOrIncrementProduct on quantity increment", () => {
    const props = {
      cartAddOrIncrementProduct: jest.fn()
    };

    const wrapper = shallow(<CartListItem {...props} />);

    const QuantityInput = wrapper.find("QuantityInput");
    QuantityInput.props().onIncrement();

    const actual = props.cartAddOrIncrementProduct.mock.calls;

    expect(actual).toHaveLength(1);
  });

  it("should call cartDecreaseProductQuantity if quantity is greater than 1", () => {
    const props = {
      cartDecreaseProductQuantity: jest.fn(),
      quantity: 2
    };

    const wrapper = shallow(<CartListItem {...props} />);

    const QuantityInput = wrapper.find("QuantityInput");
    QuantityInput.props().onDecrement();

    const actual = props.cartDecreaseProductQuantity.mock.calls;

    expect(actual).toHaveLength(1);
  });

  it("should call cartRemoveProduct if quantity is 1", () => {
    const props = {
      cartRemoveProduct: jest.fn(),
      quantity: 1
    };

    const wrapper = shallow(<CartListItem {...props} />);

    const QuantityInput = wrapper.find("QuantityInput");
    QuantityInput.props().onDecrement();

    const actual = props.cartRemoveProduct.mock.calls;

    expect(actual).toHaveLength(1);
  });
});
