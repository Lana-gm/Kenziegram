import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  padding-bottom: 70px;

  .box-content {
    background-color: var(--white);
    /*border: 1px solid var(--white);*/
    height: 80vh;
    border-radius: 0 0 25px 25px;
  }

  .header {
    background-image: var(--blue);
    height: 40px;
  }

  .header__text {
    font-weight: 400;
    line-height: 40px;
    font-size: 1.3rem;
    color: var(--white);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .content-main {
  }

  .content-main__icon {
    font-size: 50px;
  }

  .content-main__text {
    font-size: 1.5rem;
  }

  .content__progress {
  }

  .content__progess__box {
    height: 30px;
    width: 70%;
    background-color: var(--gray);
  }

  .content__prox-page {
  }
`;
