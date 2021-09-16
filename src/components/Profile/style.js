import styled from "styled-components";

export const Content = styled.div`
  min-height: 385px;
  background-color: var(--bgLight);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0 20px;
  margin-bottom: 0.7rem;
  width: 100vw;

  .cabecalho-informacoes {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 100%;
  }

  .informacoes {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .nome {
    margin-top: 1rem;
    font-size: 24px;
    color: var(--white);
    font-weight: bold;
  }

  .bio {
    text-align: start;
    color: var(--darkGray);
    font-size: 18px;
    font-weight: 600;
    margin-top: 0.5rem;
  }

  .numero__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    width: 100%;
    height: 45px;
    text-align: left;
  }

  .numero-postagens {
    color: var(--white);
    font-weight: bold;
    margin-top: 0.7rem;
    font-size: 14px;
  }

  span {
    color: var(--darkGray);
    font-weight: normal;
  }

  .icone-opcoes {
    position: absolute;
    font-size: 30px;
    top: 1rem;
    right: 1rem;
    color: var(--blueIcons);
  }

  .icone-editar {
    display: none;
  }

  @media (min-width: 1000px) {
    background-color: var(--bg);
    width: 100%;
    min-height: 216px;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 2rem;
    padding-bottom: 0.5rem;

    .cabecalho-informacoes {
      width: 100%;
      position: relative;
      flex-direction: row;
      justify-content: flex-start;
    }

    .numero__container {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      width: 100%;
    }

    .numero-postagens {
      margin-top: 1.5rem;
      margin-right: 1rem;
      font-size: 16px;
    }

    img {
      width: 150px;
      height: 150px; 
      margin: 0 50px 0 0 ;
    }

    .icone-opcoes {
      display: none;
    }

    .icone-editar {
      display: block;
      border: 1px solid rgb(68, 86, 122);
      background: none;
      width: 65px;
      height: 27px;
      color: rgb(68, 86, 122);
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      position: absolute;
      right: 0;
      top: 0;
    }

    .name__divider {
      display: flex;
      align-items: center;
      width: 10vw;
    }

    .nome {
      margin-right: 20px;
      margin-top: 0;
      width: 100%;
    }

    .icone-editar:hover {
      border: 1px solid rgb(48, 76, 112);
      color: rgb(48, 76, 112);
    }

  }
`;

export const Container = styled.div`
  @media (min-width: 1000px) {
    width: 75%;
    border-bottom: 1px solid rgb(10, 10, 10);
    margin-bottom: 1rem;
    margin-top: 4.4rem;
    min-height: 216px;
    padding: 0 100px 0 100px;
  }

  @media (min-width: 1920px) {
    width: 51%;
  }

`;
