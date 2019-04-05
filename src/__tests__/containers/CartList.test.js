import React from "react";
import { shallow, mount } from "enzyme";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../../redux/reducer";

import CartListComponent, { CartList } from "../../containers/CartList";
import CartListItem from "../../components/CartListItem";

describe("<CartList> unit", () => {
  it("should show a message if cart is empty", () => {
    const props = { cart: { items: [] } };

    const wrapper = shallow(<CartList {...props} />);

    expect(wrapper.find(".empty-cart").text()).toEqual("Your cart is empty :(");
  });

  it("should not show a message if cart is not empty", () => {
    const props = {
      cart: {
        items: [
          {
            id: 1,
            imgUrl:
              "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            name: "'70s RETRO GLAM KEFIAH",
            price: 20,
            quantity: 2
          }
        ]
      }
    };
    const wrapper = shallow(<CartList {...props} />);

    expect(wrapper.find(".empty-cart")).toHaveLength(0);
  });

  it("should render the products in the cart", () => {
    const props = {
      cart: {
        items: [
          {
            id: 1,
            imgUrl:
              "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            name: "'70s RETRO GLAM KEFIAH",
            price: 20,
            quantity: 2
          },
          {
            id: 2,
            imgUrl:
              "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            name: "GLORIA HIGH LOGO SNEAKER",
            price: 91,
            quantity: 1
          }
        ]
      }
    };

    const wrapper = shallow(<CartList {...props} />);

    expect(wrapper.find(CartListItem)).toHaveLength(2);
  });
});

describe("<CartList> integration", () => {
  it("should render 0 as initial cart items count", () => {
    const initialState = {
      cart: {
        items: [{ id: 1 }, { id: 2 }]
      }
    };
    const store = createStore(reducer, initialState);
    const wrapper = mount(
      <Provider store={store}>
        <CartListComponent />
      </Provider>
    );

    expect(wrapper.find("CartListItem")).toHaveLength(2);
  });
});
