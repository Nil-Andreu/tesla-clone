import styled from 'styled-components'

export const Container = styled.div`
    position: fixed; //With sticky, fixed or absolute has to declare the top
    right: 0;
    top: 0;
    bottom: 0;
    padding: 70px 20px 20px 20px;
    overflow-y: scroll; //On scroll you can move for the menu, so this way we can have a scrollbar
    background-color: white;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 400px;
    min-width: 280px;

    //Also for the scroll bar
    -ms-overflow-style: none; //For ie and edge
    scrollbar-width: none; //For firebox

    &:-webkit-scrollbar{
        display: none;
    }
`;
