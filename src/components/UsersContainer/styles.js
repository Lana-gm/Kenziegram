import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-left: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 1000px) {
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;
