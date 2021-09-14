import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--bgLight);
  width: 90vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  padding-left: 1rem;

  .profile__img {
    width: 70px;
    height: 70px;
    border-radius: 100%;
  }

  .profile__content {
    border-bottom: 4px solid var(--bg);
    flex-basis: 100%;
    margin-left: 1rem;
    height: 100%;
  }

  .profile__content__name {
    text-align: left;
    line-height: 77px;
    color: var(--white);
  }

  @media all and (min-width: 1000px) {
    width: 350px;
    margin: 3px;
    transition: 500ms all ease-in-out;

    &:hover {
      transform: translate(-5px, -5px);
    }

    .profile__content {
      border-bottom: none;
    }
  }
`;
