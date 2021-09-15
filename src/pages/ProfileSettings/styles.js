import styled from "styled-components";

export const ContainerPage = styled.div`
  /* height: calc(100vh - 70px); */
  background-color: var(--bg);

  h1 {
    margin: 40px 20px;
    text-align: initial;
    color: var(--white);
  }

  h3 {
    color: var(--white);
  }

  button {
    background-color: transparent;
    border: none;
    color: var(--blueIcons);
    font-size: 18px;
  }

  @media all and (min-width: 975px) {
    display: flex;
    align-items: flex-end;
    margin-top: 70px;
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
  width: 336px;
  height: 572px;
  margin: 0 auto;
  position: relative;

  .profile_name {
    display: none;
  }

  .change_picture {
    width: 100%;
    height: 211px;
    background-color: var(--bgLight);
    display: flex;
    flex-direction: column;
    justify-content: inherit;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 38px;

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
    margin-bottom: 35px;

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
      padding-left: 10px;
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
      opacity: 25%;
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

  .textarea_content {
    width: 100%;
    height: 30px;
    height: 30px;
    background-color: var(--bg);
    border: none;
    color: var(--white);
    transition: 0.5s all ease-in-out;
    padding: 8px 0 0 10px;
    resize: none;

    &::placeholder {
      padding-left: 10px;
      color: var(--white);
      opacity: 25%;
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
  padding-bottom: 4rem;

  .button_desktop {
    display: none;
  }

  @media all and (min-width: 975px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;

    .header_edit {
      display: none;
    }

    .title_profile {
      display: none;
    }

    .profile_name {
      display: initial;
    }

    .main {
      background-color: var(--bgLight);
      width: 600px;
      height: 580px;
    }

    .profile_box {
      width: 500px;
      margin: 0 auto;
      justify-content: space-between;
      display: flex;
      align-items: center;
    }

    .change_information {
      border: 1px solid var(--bg);
    }

    .form_input {
      width: 500px;
      margin: 0 auto;
    }

    .button_mobile {
      display: none;
    }

    .button_desktop {
      display: initial;
    }
  }
`;

export const ContainerInput = styled.div`
  .alterar-foto {
    position: absolute;
    top: 11rem;
    left: 50%;
    transform: translateX(-50%);
  }

  @media all and (min-width: 975px) {
    width: 500px;
    margin: 0 auto;
  }
`;
