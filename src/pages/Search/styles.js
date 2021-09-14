import styled from "styled-components";

export const Container = styled.main`
  max-width: 975px;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

  .container-icon {
    flex-basis: 15%;
    position: relative;
    width: 100%;
  }

  .logo {
    position: absolute;
    top: 0.5rem;
  }

  .container-search {
    flex-basis: 35%;
    max-width: 725px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-bottom: 1px solid var(--bg);
  }

  .container-search__text {
    font-size: 2rem;
    color: var(--white);
    padding-bottom: 1rem;
    margin-top: 6rem;
  }

  .content {
    width: 100%;
    display: flex;
    /*align-items: center;*/
    background-color: rgb(153 153 153 / 8%);
    border-radius: 7px;
    padding: 3px;
  }

  .content__icon {
    font-size: 30px;
    color: var(--white);
  }

  .content__input {
    width: 100%;
    height: 30px;
    font-size: 1rem;
    background-color: transparent;
    transition: 1s all ease-in-out;
    color: var(--white);

    &::placeholder {
      padding-left: 1rem;
      color: var(--white);
    }

    &:focus {
      padding-left: 1rem;
    }

    &:focus {
      background-color: rgb(153 153 153 / 8%);
      caret-color: var(--gray);
      border-bottom: 2px solid var(--gray);
    }
  }

  @media all and (min-width: 1000px) {
    padding: 70px 0 0 0;
    border-top: 4px solid var(--bg);

    .container-icon {
      display: none;
    }

    .icon-close {
      display: none;
    }

    .container-search__text {
      font-size: 2rem;
      padding-bottom: 2rem;
      margin-top: 0rem;
    }

    .logo {
      display: none;
    }
  }
`;
