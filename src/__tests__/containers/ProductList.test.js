import React from "react";
import { shallow, mount } from "enzyme";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../../redux/reducer";
import ProductListComponent, {
  ProductList
} from "../../containers/ProductList";
import Product from "../../components/Product";

const props = [
  {
    id: 1,
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
    name: "'70s RETRO GLAM KEFIAH",
    price: 20
  },
  {
    id: 2,
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
    name: "GLORIA HIGH LOGO SNEAKER",
    price: 91
  }
];

describe("<ProductList> unit", () => {
  it("should render a list of products", () => {
    const wrapper = shallow(<ProductList products={props} />);

    expect(wrapper.find(Product)).toHaveLength(2);
  });

  it("should not render a list if there is not passed products", () => {
    const wrapper = shallow(<ProductList products={[]} />);

    expect(wrapper.find(Product)).toHaveLength(0);
  });
});

describe("<ProductList> integration", () => {
  const store = createStore(reducer);

  it("should render 5 products from store", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ProductListComponent />
      </Provider>
    );

    expect(store.getState().products).toHaveLength(5);
    expect(wrapper.find(Product)).toHaveLength(5);
  });
});
