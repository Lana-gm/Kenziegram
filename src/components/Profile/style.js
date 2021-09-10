import styled from "styled-components";

export const Content = styled.div`
  min-height: 236px;
  background-color: var(--bgLight);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.5rem;
  padding-top: 2rem;
  padding-left: 1rem;
  margin-bottom: 0.7rem;

  .cabecalho-informacoes {
    display: flex;
  }

  img {
    width: 100px;
    height: 100px;
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

  .numero-postagens {
    color: var(--white);
    font-weight: bold;
    margin-top: 3.5rem;
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
    min-height: 216px;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 2rem;
    padding-bottom: 0.5rem;

    .cabecalho-informacoes {
      width: 975px;
      position: relative;
    }

    img {
      margin-left: 0rem;
    }

    .numero-postagens {
        margin-top: 3.5rem;
        font-size: 16px;
    }

    .icone-opcoes {
      display: none;
    }

    .icone-editar {
      display: inline-block;
      color: var(--blueIcons);
      font-size: 30px;
      position: absolute;
      right: 1rem;
      top: 1rem;
      cursor: pointer;
    }
  }
`;

export const Container = styled.div`
  @media (min-width: 1000px) {
    border: 1px solid black;
    width: 100vw;
    margin-bottom: 3rem;
    margin-top: 4.4rem;
    min-height: 216px;
  }
`;
