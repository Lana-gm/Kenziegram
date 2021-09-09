import styled from "styled-components";


export const Container = styled.div`
    max-width: 975px;
    min-height: min-content;
    background-color: var(--bgLight);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

    .icone-opicoes {
        position: absolute;
        color: var(--blueIcons);
        font-size: 24px;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
    }

    .informacoes {
        display: flex;
        margin-top: 1rem;
        margin-left: 1rem;
    }

    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }

    .nome {
        margin-top: 1rem;
        margin-left: 0.5rem;
        color: var(--white);
        font-size: 18px;
        font-weight: bold;
    }

    .conteiner-publicacao {
        margin-top: 1rem;
        text-align: start;
    }

    .texto-publicacao {
        font-size: 14px;
        color: white;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .conteiner-curtidas {
        display: flex;
        margin-left:1rem;
        margin-top: 1rem;
    }

    .icone-curtir {
        color: #007BFF;
        font-size: 24px;
        cursor: pointer;
        margin-bottom: 1rem;
    }

    .curtidas {
        font-size: 16px;
        color: var(--white);
        margin-left: 0.2rem;
        margin-top: 0.4rem;
    }
`

