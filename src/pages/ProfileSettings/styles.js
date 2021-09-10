import styled from "styled-components";

export const ContainerPage = styled.div`
  height: calc(100vh - 70px);
  background-color: var(--bg);

  h1 {
    margin: 40px 20px;
    text-align: initial;
    color: var(--white);
  }
`;

export const HeaderEdit = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
  margin: 0 20px;
  color: var(--white);

  p {
    color: var(--blue-svg);
  }

  .icone_seta {
    svg {
      color: var(--white);
      font-size: 30px;
    }
  }
`;

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 336px;
  height: 572px;
  margin: 0 auto;

  .change_picture {
    width: 100%;
    height: 211px;
    background-color: var(--bgLight);

    p {
      color: var(--blue-svg);
    }
  }

  .change_information {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 55px;
    background-color: var(--bgLight);
    color: var(--white);
    align-items: center;
    padding: 0 10px;
  }
`;
