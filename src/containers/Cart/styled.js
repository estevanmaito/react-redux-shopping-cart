import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const ClickableElement = styled.div`
  cursor: pointer;
`;
ClickableElement.displayName = "ClickableElement";

export const CartItemCount = styled.div`
  background-color: #eee;
  border-radius: 2px;
  padding: 2px;
`;
CartItemCount.displayName = "CartItemCount";
