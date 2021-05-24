import React from 'react'
import styled from 'styled-components'

//With clicking control space with a component selected, makes automatic import
const MenuItem = ({title}) => {
    return (
        <Container>
            <h4>{title}</h4>
        </Container>
    )
}

export default MenuItem

const Container = styled.div`
    border-bottom: 1px solid #d0d1d2;
    text-align: left;
    cursor: pointer;

    h4 {
        font-weight: 500;
        letter-spacing: 0.5 px;
        text-transform: uppercase;
        padding: 0px 10px 15px 0px;
        font-size: 15px;
        cursor: pointer;
    }
`;