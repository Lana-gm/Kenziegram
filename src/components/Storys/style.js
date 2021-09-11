import styled from "styled-components";

export const Container = styled.div`
  height: 188px;
  width: 100vw;
  background-color: var(--bgLight);
  padding: 1rem 1rem 1rem;
  position: relative;

  .titulos {
    display: flex;
    justify-content: space-between;
  }

  .titulo {
    color: var(--white);
    font-size: 30px;
    font-weight: bold;
  }

  .amigos {
    color: var(--blueIcons);
    font-weight: bold;
    font-size: 18px;
    padding-top: 0.5rem;
  }

  .usuarios {
    display: flex;
    margin-top: 1rem;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .usuario {
    margin-right: 0.5rem;
    min-width: 4.5rem;
    max-height: 6rem;
  }

  .nome {
      color: var(--white);
  }

  .imagem {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid;
    border-image: linear-gradient(135deg, red 0%, blue 100%) 1;
  }

  @media (min-width: 1000px) {
    width: 975px;
    margin-top: 5rem;

    .usuarios {
      scroll-behavior: smooth;
      ::-webkit-scrollbar {
        display: none;
      }
    }

    #back {
      color: var(--blueIcons);
      cursor: pointer;
      font-size: 30px;
      position: absolute;
      top: 6rem;
    }

    #next {
      transform: scaleX(-1);
      color: var(--blueIcons);
      cursor: pointer;
      font-size: 30px;
      position: absolute;
      top: 6rem;
      right: 1rem;
    }
  }
`;
