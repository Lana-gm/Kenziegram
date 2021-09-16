import styled from "styled-components";

export const Container = styled.div`
  height: 190px;
  width: 100vw;
  background-color: var(--bgLight);
  padding: 1rem 0rem 0rem 1rem;
  position: relative;

  .titulos {
    display: flex;
    justify-content: space-between;
  }

  .titulo {
    color: var(--white);
    font-size: 30px;
    font-weight: bold;
    margin-left: 0rem;
  }

  #usuariosId {
    display: flex;
    margin-top: 1rem;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .usuario {
    width: 6rem;
    height: 6.8rem;
    cursor: pointer;
  }

  .nome {
    color: var(--white);
    max-width: 40ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: inherit;
  }

  .imagem {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }

  .carregamento {
    margin-left: 1rem;
  }

  .x {
    color: white;
    z-index: 100;
  }

  @media (min-width: 1000px) {
    width: 570px;
    margin-top: 5rem;

    #back {
      color: var(--blueIcons);
      cursor: pointer;
      font-size: 30px;
      position: absolute;
      top: 5rem;
      left: 1rem;
      border-radius: 100%;
      box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
        rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
        rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
        rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }

    #next {
      transform: scaleX(-1);
      color: var(--blueIcons);
      cursor: pointer;
      font-size: 30px;
      position: absolute;
      top: 5rem;
      right: 1rem;
      border-radius: 100%;
      box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
        rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
        rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
        rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
  }
`;
