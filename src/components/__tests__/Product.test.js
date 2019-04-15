import React from "react";
import { shallow } from "enzyme";
import { Product } from "../Product";

const props = {
  product: {
    id: 1,
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
    name: "'70s RETRO GLAM KEFIAH",
    price: 20
  },
  cartAddOrIncrementProduct: jest.fn()
};

describe("<Product> unit", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Product {...props} />);
  });

  it("should render the product image", () => {
    const expected = props.product.imgUrl;

    expect(wrapper.find("Image").prop("src")).toEqual(expected);
  });

  it("should render the product name", () => {
    const expected = props.product.name;

    expect(wrapper.find("Name").text()).toContain(expected);
  });

  it("should render the product price", () => {
    const expected = props.product.price;

    expect(wrapper.find("Price").text()).toContain(expected);
  });

  it("should render the add to cart button", () => {
    expect(wrapper.find("Button").text()).toContain("add to cart");
  });
});

describe("<Product> integration", () => {
  it("should should add a product to the cart when butotn is clicked new abordagem", () => {
    const wrapper = shallow(<Product {...props} />);
    const Button = wrapper.find("Button");
    Button.simulate("click");

    expect(props.cartAddOrIncrementProduct).toHaveBeenCalled();
  });
});
