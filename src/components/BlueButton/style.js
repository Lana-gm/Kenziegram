import styled, { css } from 'styled-components'


export const BlueBtn = styled.button`
    width: 329px;
    height: 47px;
    border: 0;
    border-radius: 25px;
    background-image: var(--blue);
    background-color: none;
    color: white;
    margin-top: 15px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    box-sizing: border-box;
    transition: 0.3s all;

    
    ${props =>
        props.white &&
        css`
            background-color: white;
            background-image: none;
            color: #17A2B8;  
            `
    }

    @media (min-width: 720px) {
        &:hover {
            ${props =>
        props.white ?
            css`
                background-color: rgb(220, 220, 220);
                background-image: none;
                color: #17A2B8;  
                `
            :
            css`
                background-image: linear-gradient(180deg, rgba(0, 113, 255, 1) 0%, rgba(23, 152, 184, 1) 100%);;
                `
    }
        }
    }
`