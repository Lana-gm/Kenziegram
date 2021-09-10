import styled from "styled-components";

export const Container = styled.div`
  flex-basis: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding-bottom: 70px;

  @media all and (min-width: 1000px) {
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-bottom: 0;
    max-width: 720px;
    margin: 0 auto;
  }
`;
