import styled from "styled-components";

export const Container = styled.section`
  min-height: 78vh;
  padding-bottom: 1rem;
  max-width: 975px;
  margin: 0 auto;
  animation: ease-in 500ms both slidein;

  .add-file {
    background-color: var(--blueIcons);
    border-radius: 5px;
    color: var(--white);
    cursor: pointer;
    margin: 10px;
    padding: 6px 20px;
  }

  input[type="file"] {
    display: none;
  }

  @keyframes slidein {
    from {
      transform: translateX(150px);
      opacity: 0;
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  .box-content {
    background-color: var(--bgLight);
    height: 77vh;
    border-radius: 0 0 25px 25px;
    width: 100%;
  }

  .header {
    background-image: var(--blue);
    height: 60px;
  }

  .header__text {
    font-weight: 400;
    line-height: 60px;
    font-size: 1.3rem;
    color: var(--white);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    padding-bottom: 7rem;
  }

  .content-main {
    button {
      /*color: #000;*/
      width: 150px;
    }
  }

  .content-main__icon {
    font-size: 50px;
    color: var(--white);
  }

  svg + svg {
    margin-left: 1.5rem;
  }

  .content-main__text {
    padding: 1.5rem 0;
    font-size: 1.5rem;
    color: var(--white);
  }

  .content__progress {
    width: 100%;
    padding-top: 3rem;
    flex-basis: 30%;
  }

  .content__progess__box {
    height: 20px;
    width: 70%;
    margin: 0 auto;
    background-color: var(--gray);
  }

  .content__prox-page {
    position: relative;
    width: 100%;
    flex-basis: 22%;
  }

  .prox-page__btn {
    background-color: transparent;
    border: none;
    position: absolute;
    right: 30px;

    svg {
      font-size: 40px;
      path {
        stroke: var(--blueIcons);
      }
    }
  }

  @media all and (min-width: 1000px) {
    min-height: 93vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    .box-content {
      border-radius: 30px;
    }

    .header {
      border-radius: 25px 25px 0 0;
    }
    .header__text {
      font-size: 2rem;
    }

    .content__progress {
      flex-basis: 24%;
    }
    .content-main {
      button {
        /*color: #000;*/
        width: 220px;
      }
    }
    .content-main__text {
      font-size: 1.8rem;
    }

    .prox-page__icon {
      right: 50px;
    }
  }
`;
