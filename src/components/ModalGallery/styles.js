import styled from "styled-components";

export const Display = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgb(0, 0, 0, 0.6);

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container__btn {
    position: absolute;
    top: 40px;
    left: 40px;
    border: none;
    background-color: transparent;
  }
  .container__btn__return {
  }
  .container__btn__close {
    display: none;
  }
  .btn {
    font-size: 30px;
    color: var(--white);
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content__box {
    position: relative;
  }
  .box__btn-options {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: var(--bg);
    border-radius: 100%;
  }
  .box__figure {
    width: 100%;
  }
  .box__figure__img {
    max-height: 510px;
    max-width: 700px;
    object-fit: contain;
  }
  .box__figure__figcaption {
    display: none;
  }

  @media all and (min-width: 1000px) {
    .container__btn {
      left: auto;
      right: 40px;
    }
    .container__btn__return {
      display: none;
    }
    .container__btn__close {
      display: block;
    }
  }

  @media all and (min-height: 980px) {
    .box__figure__img {
      max-height: 550px;
      max-width: 750px;
      object-fit: contain;
    }
  }
`;
