import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vw;
    top: 0;
    right: 0;
    background: black;
    z-index: 10;

    opacity: ${({isOpen}) => (isOpen ? '100%' : '0%')};
    top: ${({ isOpen }) => (isOpen ? '0%' : '100%')};
`;