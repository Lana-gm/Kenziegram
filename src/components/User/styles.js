import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--bgLight);
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

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

    &:last-child() {
      border: none;
    }
  }

  .profile__content__name {
    text-align: left;
    color: var(--white);
  }

  @media all and (min-width: 1000px) {
    width: 350px;
  }
`;
