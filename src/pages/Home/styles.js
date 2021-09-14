import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;

  .ola {
    color: white;
    z-index: 5000;
  }

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
