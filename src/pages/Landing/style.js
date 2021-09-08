import styled from 'styled-components'
import LandingMobile from '../../assets/LandingMobile.png'
import Landing from '../../assets/Landing.png'

export const MainPage = styled.main`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    background-image: url(${LandingMobile});
    width: 100%;
    height: 100%;

    .gray__gradient {
        position: absolute;
        background-image: var(--gradient);
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .input__box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }

    .input__btn {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .text__box {
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        justify-content: center;
        margin: 120px 35px 20px 25px;
        color: white;
        z-index: 1;
        text-align: left;
    }

    .btn__invisible {
        background: none;
        border: 0;
        font-size: 40px;
        color: white;
    }

    h1 {
        color: white;
        font-style: normal;
        font-weight: bold;
        font-size: 38px;
        line-height: 50px;
    }

    .divider {
        color: white;
        margin: 20px;
    }

    @media (min-width: 720px) {
        align-items: center;
        background-image: url(${Landing});
        background-repeat: no-repeat;
        background-size: cover;

        h1 {
            font-size: 42px;
        }

        .text__box {
            margin: 0;
            align-content: center;
            width: 325px;
            margin-bottom: 50px;
        }
    }


`