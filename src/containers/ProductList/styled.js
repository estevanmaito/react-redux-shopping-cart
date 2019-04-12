import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 2rem;
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  grid-gap: 1rem;
`;
