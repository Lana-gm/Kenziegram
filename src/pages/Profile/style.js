import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 100%;
  overflow-x: hidden;

  /* .posts {
    width: 90%;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  } */

  .picture__container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
        padding: 20px;
    }

  @media (min-width: 1000px) {
    .picture__container {
        width: 75%;
        padding: 20px;
        justify-content: space-between;
    }

  }

  @media (min-width: 1920px) {
    .picture__container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 53%;
        padding: 20px;
    }

  }



`;
