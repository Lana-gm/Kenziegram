import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    .posts {
        width: 90%;
        margin-bottom: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media(min-width: 1000px) {
        .posts {
            width: 100%;
        }
    }

`
