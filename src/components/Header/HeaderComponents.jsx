import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    position: sticky; //Position sticks in the top (stays in the top)
    top: 0;
    left: 0;
    right: 0;
    z-index: 2; //So the heade appears always
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px 25px 25px;
`;

export const LogoContainer = styled.div`
    
`;

export const Img = styled.img`
    object-fit: contain;
    width: 90px;
    height: auto;
    margin-right: 100px;
    flex: 1; //So the image occupies as much space as possible
`;