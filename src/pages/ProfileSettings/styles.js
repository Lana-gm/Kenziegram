import styled from "styled-components";

export const ContainerPage = styled.div`
  height: calc(100vh - 70px);
  background-color: var(--bg);

  h1 {
    margin: 40px 20px;
    text-align: initial;
    color: var(--white);
  }

  button {
    background-color: transparent;
    border: none;
    color: var(--blueIcons);
    font-size: 18px;
  }
`;

export const HeaderEdit = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
  margin: 0 20px;
  color: var(--white);

  p {
    color: var(--blue-svg);
  }

  .icone_seta {
    svg {
      color: var(--white);
      font-size: 30px;
    }
  }
`;

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 336px;
  height: 572px;
  margin: 0 auto;

  .change_picture {
    width: 100%;
    height: 211px;
    background-color: var(--bgLight);
    display: flex;
    flex-direction: column;
    justify-content: inherit;
    align-items: center;

    p {
      color: var(--blue-svg);
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
    }
  }

  .change_information {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 55px;
    background-color: var(--bgLight);
    color: var(--white);
    align-items: center;
    padding: 0 10px;

    .placeholder {
      opacity: 20%;
    }
  }

  .input_text {
    margin-bottom: 38px;

    input {
      width: 100%;
      height: 34px;
      background-color: var(--bg);
      color: var(--white);
    }
  }

  .input_content {
    width: 100%;
    height: 30px;
    background-color: transparent;
    transition: 0.5s all ease-in-out;
    color: var(--white);

    &::placeholder {
      padding-left: 10px;
      color: var(--white);
    }

    &:focus {
      padding-left: 10px;
    }

    &:focus {
      background-color: rgb(153 153 153 / 8%);
      caret-color: var(--gray);
      border-bottom: 2px solid var(--gray);
    }
  }
`;

export const Container = styled.div`
  @media all and (min-width: 975px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;
