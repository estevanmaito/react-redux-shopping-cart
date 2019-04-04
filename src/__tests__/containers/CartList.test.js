import React from "react";
import { shallow } from "enzyme";

import { CartList } from "../../containers/CartList";
import CartListItem from "../../components/CartListItem";

describe("<CartList> unit", () => {
  it("should show a message if cart is empty", () => {
    const props = { cart: [] };

    const wrapper = shallow(<CartList {...props} />);

    expect(wrapper.find("p").text()).toContain("Your cart is empty :(");
  });

  it("should not show a message if cart is not empty", () => {
    const wrapper = shallow(<CartList cart={[{ id: 1 }, { id: 2 }]} />);

    expect(wrapper.find("p")).toHaveLength(0);
  });

  it("should render the products in the cart", () => {
    const props = {
      cart: [
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
    };

    const wrapper = shallow(<CartList {...props} />);

    expect(wrapper.find(CartListItem)).toHaveLength(2);
  });
});
