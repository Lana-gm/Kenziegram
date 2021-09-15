import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 55px;
  background-color: var(--bg);
  border-bottom: 1px solid black;
  z-index: 1;

  h1 {
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
    background-color: var(--bgLight);
    padding: 10px;

    h1 {
      display: block;
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .content__nav {
      flex-basis: 30%;
    }

    .list {
      justify-content: space-between;
    }

    .list__item-hidden {
      display: inline-block;
    }

    .list__item__link {
      svg {
        font-size: 26px;
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
