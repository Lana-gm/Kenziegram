import styled from 'styled-components'

export const InputShape = styled.input`
    background: var(--gray);
    width: 329px;
    height: 47px;
    border-radius: 25px;
    padding: 0 0 0 15px;
    margin: 0 0 9px 0;
    outline: none;
    transition: 0.3s all;
    color: white;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;

    &::placeholder {
        color: white;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
    }

    &:hover {
        background: rgba(100, 100, 100, 0.5);
    }

    &:focus {
        background: rgba(100, 100, 100, 0.5);
    }


`