import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  background-color: var(--bgLight);

  h1 {
    font-size: 2rem;
    display: none;
  }

  .content {
    height: 100%;
    max-width: 975px;
    margin: 0 auto;
  }

  .content__nav {
    height: 100%;
  }

  .list {
    height: 100%;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .list__item-hidden {
    display: none;
  }

  .list__item__link {
    svg {
      color: var(--white);
      font-size: 30px;
    }
  }

  .selected {
    svg {
      color: var(--blue-svg);
    }
  }

  @media all and (min-width: 975px) {
    top: 0;
    bottom: auto;

    h1 {
      display: block;
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .content__nav {
      flex-basis: 50%;
    }

    .list__item-hidden {
      display: inline-block;
    }

    .list__item__link {
      svg {
        font-size: 25px;
      }
    }
  }

  @media all and (min-height: 1080px) {
    h1 {
      font-size: 2.5rem;
    }
    .list__item__link {
      svg {
        font-size: 30px;
      }
    }
  }
`;
