import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { cartAddOrIncrementProduct } from "../redux/actions/cart.actions";

export const Product = props => {
  const { product } = props;
  return (
    <Wrapper>
      <Image src={product.imgUrl} alt={product.name} />
      <Price>${product.price}</Price>
      <Name>{product.name}</Name>
      <Button onClick={() => props.cartAddOrIncrementProduct(product)}>
        add to cart
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 1rem;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: 170px;
`;
Image.displayName = "Image";

const Name = styled.span`
  font-weight: 700;
  flex-grow: 1;
`;
Name.displayName = "Name";

const Price = styled.span`
  font-size: 0.9rem;
  font-weight: 300;
`;
Price.displayName = "Price";

const Button = styled.button`
  width: 100%;
  padding: 8px 0;
  border: 1px solid rgb(149, 255, 162);
  border-radius: 3px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgb(149, 255, 162);
  }

  &:hover {
    background-color: rgb(149, 255, 162);
  }

  &:active {
    transform: scale(1.05);
  }
`;
Button.displayName = "Button";

const mapDispatchToProps = {
  cartAddOrIncrementProduct
};

export default connect(
  null,
  mapDispatchToProps
)(Product);
