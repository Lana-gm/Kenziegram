import styled from "styled-components";

export const Container = styled.div`
  height: 210px;
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
    padding-bottom: 3rem;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .usuario {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    min-width: 4.5rem;
    max-height: 5.2rem;
    cursor: pointer;
  }

  .nome {
    color: var(--white);
  }

  .imagem {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }

  .x {
    color: white;
    z-index: 100;
  }

  @media (min-width: 1000px) {
    width: 975px;
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
