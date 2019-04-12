import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  height: 80px;
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 50px;
  height: auto;
  margin-right: 1rem;
`;

export const NameWrapper = styled.div`
  flex-grow: 3;
  display: flex;
  flex-direction: column;
  margin-right: 4px;
`;

export const Name = styled.span``;

export const RemoveButton = styled.span`
  font-size: 0.7rem;
  cursor: pointer;
  text-decoration: underline;
  color: #ccc;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: tomato;
  }
`;
RemoveButton.displayName = "RemoveButton";

export const Price = styled.span`
  width: 90px;
  text-align: right;
`;
