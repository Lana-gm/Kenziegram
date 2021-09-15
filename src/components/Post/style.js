import styled from "styled-components";


export const Container = styled.div`
    max-width: 100%;
    min-width: 330px;
    min-height: min-content;
    background-color: var(--bgLight);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    margin-bottom: 1rem;

    .icone-opicoes {
        position: absolute;
        color: var(--blueIcons);
        font-size: 24px;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
    }

    img {
            width: 300px;
            height: 300px;
        }

    .informacoes {
        display: flex;
        margin-top: 1rem;
        margin-left: 1rem;
    }

    .avatar {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }

    .nome {
        margin-top: 1.3rem;
        margin-left: 0.8rem;
        color: var(--white);
        font-size: 20px;
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
        margin-bottom: 10px;
    }

    @media(min-width: 720px) {
        margin-bottom: 2rem;
        box-sizing: border-box;
        width: 570px;

        img {
            width: 570px;
            height: 570px;
        }

        .texto-publicacao {
            font-size: 16px;
        }
    }
`

