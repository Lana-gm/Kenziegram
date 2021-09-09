import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .posts {
        width: 90vw;
        margin-bottom: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media(min-width: 1000px) {
        .posts {
            align-items: center;
        }
    }
`