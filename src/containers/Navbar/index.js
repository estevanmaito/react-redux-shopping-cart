import React from "react";

import Cart from "../Cart";

import { Nav, Spacer } from "./styled";
import { Container } from "../../components/StructureStyles/styled";

export const Navbar = () => (
  <Nav>
    <Container>
      <Spacer>
        <span>React + Redux Shopping Cart</span>
        <Cart />
      </Spacer>
    </Container>
  </Nav>
);

export default Navbar;
