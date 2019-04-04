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
