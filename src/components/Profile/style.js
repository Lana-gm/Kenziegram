import styled from "styled-components";

export const Container = styled.div`
  min-height: 236px;
  background-color: var(--bgLight);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.5rem;

  .cabecalho-informacoes {
    display: flex;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin-top: 3rem;
    margin-left: 1rem;
  }

  .informacoes {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .nome {
    margin-top: 4rem;
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
    margin-top: 4.4rem;
    border: 1px solid black;
    min-height: 216px;

    .cabecalho-informacoes {
      width: 975px;
      position: relative;
    }

    img {
      margin-left: 0rem;
    }

    .icone-opcoes {
        display: none;
    }

    .icone-editar {
        display: inline-block;
        color: var(--blueIcons);
        font-size: 30px;
        position: absolute;
        right: 3rem;
        top: 4rem;
        cursor: pointer;
    }
  }
`;
