import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: center;

`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 100%;
  overflow-x: hidden;

  .picture__wrap {
    display: flex;
    justify-content: center;
  }

  .picture__container {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: 360px;
        padding: 20px;
    }

  @media (min-width: 720px) {
    .picture__container {
        width: 100%;
        max-width: 1000px;
        padding: 20px;
        justify-content: flex-start;
    }

  }

  @media (min-width: 1920px) {
    .picture__container {
        justify-content: flex-start;
        padding: 20px;
    }

  }

  @media (min-width: 2000px) {
    max-width: 2000px;


    .picture__container {
        justify-content: flex-start;
        padding: 20px;
    }

  }



`;
