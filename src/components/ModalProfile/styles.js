import styled from "styled-components";

export const Display = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);

  .container {
    width: min-content;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .close {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .Content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 320px;
    height: 300px;
    background-color: var(--white);
  }

  .content__progress {
    --webkit-appearance: none;
    appearance: none;
    width: 50%;
  }
`;
