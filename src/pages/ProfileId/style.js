import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100vw;
  overflow-x: hidden;

  .posts {
    width: 90%;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1000px) {
    .posts {
      width: 100%;
    }
  }
`;
