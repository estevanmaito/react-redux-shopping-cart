import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  grid-gap: 1rem;
  padding-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 300px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 200px;
  }
`;
