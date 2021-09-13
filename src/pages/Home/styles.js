import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  overflow-x: hidden;

  .posts {
    width: 90%;
    margin-bottom: 5rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }

  @media (min-width: 1000px) {
    .posts {
      width: 100%;
    }
  }
`;
