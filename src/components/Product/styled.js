import styled from "styled-components";

export const Wrapper = styled.div`
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

export const ResponsiveImage = styled.div`
  margin: 0 auto;
`;
ResponsiveImage.displayName = "ResponsiveImage";

export const Image = styled.img`
  width: auto;
  height: 100%;
  max-height: 170px;

  @media screen and (max-width: 600px) {
    max-height: 80px;
  }
`;
Image.displayName = "Image";

export const Name = styled.span`
  font-weight: 700;
  flex-grow: 1;

  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;
Name.displayName = "Name";

export const Price = styled.span`
  font-size: 0.9rem;
  font-weight: 300;
`;
Price.displayName = "Price";

export const Button = styled.button`
  width: 100%;
  padding: 8px 0;
  border: 1px solid rgb(149, 255, 162);
  border-radius: 3px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  font-family: Raleway, Montserrat, "Helvetica Neue", Arial, sans-serif;
  color: rgb(11, 81, 19);

  @media screen and (max-width: 600px) {
    padding: 4px 0;
  }

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
