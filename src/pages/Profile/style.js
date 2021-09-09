import styled from "styled-components";

export const Container = styled.div`
  height: 236px;
  background-color: var(--bgLight);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icone-opcoes {
      position: absolute;
      font-size: 30px;
      top: 1rem;
      right: 1rem;
      color: var(--blueIcons);
  }
  

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
      font-weight:600;
      margin-top: 0.5rem;
  }

  .numero-postagens {
      color: var(--white);
      font-weight: bold;
      margin-top: 3rem;
      font-size: 14px;
  }

  span {
      color: var(--darkGray);
      font-weight: normal;
  }

  @media(min-width: 100px) {
      background-color: var(--bg);
      margin-top: 4.4rem;
      border: 1px solid black;

      .cabecalho-informacoes {
          width: 975px;
      }

      img {
          margin-left: 0rem;
      }
  }
`;
