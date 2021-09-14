import styled, { css } from "styled-components";

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div + div {
    margin-left: 0.2rem;
  }
`;

export const InfoContent = styled.div`
  ${(props) =>
    props.isShow
      ? css`
          height: 20px;
          width: 20px;
          background-color: var(--gray);
          border-radius: 100%;
          transition: 500ms all ease-in-out;
        `
      : css`
          height: 15px;
          width: 15px;
          background-color: var(--bgLight);
          border-radius: 100%;
        `}
`;
