import styled from "styled-components";

export const Link = styled.a`
  border: none;
  background-color: transparent;
  cursor: pointer;

  .picture {
    width: 155px;
    height: 155px;
    border: 1px solid rgb(58, 58, 58);
    background: var(--bgLight);
    margin: 0 5px 0 0;
    object-fit: cover;
  }

  @media (min-width: 720px) {
    .picture {
      width: 310px;
      height: 310px;
      margin-bottom: 8px;
      margin-right: 10px;
      transition: 0.2s ease-in-out;
    }

    .picture:hover {
      filter: brightness(70%);
    }
  }

  @media (min-width: 1920px) {
    .picture {
      margin-bottom: 13px;
    }
  }
`;
