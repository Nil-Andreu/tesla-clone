import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrap = styled.div`
    display: grid;
    grid-template-rows: 50vh 70vh;
    grid-template-columns: 100vw;
    align-items: center;
    justify-items: center;
    margin-top: 15vh;

    @media (min-width: 1400px) {
        grid-template-columns: 50vw 50vw;
        grid-template-rows: 100vh;
        margin-top: 0vh;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

    @media (min-width: 1400px) {
        width: 35vw;
        margin-left: 10vw;
    }
`;

export const Title = styled.h1`
    color: #181818;
    font-family: 'Fira Sans', sans-serif;
    font-size: 3rem;

    @media (min-width: 1000px) {
        font-size: 4rem;
    }
`;

export const Paragraph = styled.p`
    font-size: 1.7rem;

    @media (min-width: 1000px) {
        font-size: 1.5rem;
    }

    b {
        font-weight: 800;
    }
`;