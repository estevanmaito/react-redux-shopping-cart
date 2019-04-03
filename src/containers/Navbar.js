import React from "react";
import styled from "styled-components";

import Cart from "./Cart";

export const Navbar = () => (
  <Wrapper>
    <Cart />
  </Wrapper>
);

const Wrapper = styled.nav`
  padding: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: flex-end;
`;

export default Navbar;
