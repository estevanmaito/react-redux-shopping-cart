import React from "react";
import { shallow, mount } from "enzyme";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "../../redux/reducer";
import ProductComponent, { Product } from "../../components/Product";

const props = {
  id: 1,
  imgUrl:
    "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
  name: "'70s RETRO GLAM KEFIAH",
  price: 20
};

describe("<Product> unit", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Product product={props} />);
  });

  it("should render the product image", () => {
    expect(wrapper.find("Image").prop("src")).toEqual(props.imgUrl);
  });

  it("should render the product name", () => {
    expect(wrapper.find("h3").text()).toContain(props.name);
  });

  it("should render the product price", () => {
    expect(wrapper.find("Price").text()).toContain(props.price);
  });

  it("should render the add to cart button", () => {
    expect(wrapper.find("Button").text()).toContain("add to cart");
  });
});

describe("<Product> integration", () => {
  const store = createStore(reducer, applyMiddleware(thunk));

  it("should add a product to the cart when button is clicked", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ProductComponent product={props} />
      </Provider>
    );

    wrapper.find("Button").simulate("click");

    expect(store.getState().cart.items[0]).toEqual({ ...props, quantity: 1 });
    expect(store.getState().cart.items).toHaveLength(1);
  });
});
