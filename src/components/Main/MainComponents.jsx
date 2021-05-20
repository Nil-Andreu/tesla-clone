import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: calc(100vh-3.5rem);
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: 100vh;
    align-items: center;
    justify-items: center;
    background: #181818;
`

export const TitleContainer = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    text-transform: uppercase;
    color: white;
    text-align: center;
    font-family: 'Fira Sans', sans-serif;
    font-size: 3.5rem;
    display: flex;
    flex-direction: column;

    @media (min-width: 1000px) {
        font-size: 5rem;
    }
`

export const Anchor = styled.a`
    display: block;
    background-color: #22d976;
    border: 1px solid #22d976;
    box-shadow: 0px 4px 15px 0px rgb(74 210 96 / 47%);
    color: white;
    padding: 20px 90px;
    border-radius: 8px;
    text-align: center;
    transition: all 250ms ease-in;
    font-size: 1rem;
    cursor: pointer;

    @media (min-width: 1000px) {
        font-size: 1.1rem;
    }

    &:hover {
        transform: scale(1.05)
    }
`