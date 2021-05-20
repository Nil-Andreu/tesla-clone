import React from 'react';
import Sphere from './Sphere.jsx';
import {Container,
    TitleContainer,
    Title,
    Anchor } from './MainComponents.jsx'


function Main() {
    return (
        <Container>
            <Sphere />
            <TitleContainer>
                <Title><span>Savitar</span>
                    <span>Technologies</span></Title>
                <Anchor>
                    Start creating
                </Anchor>
            </TitleContainer>
        </Container> 
    )
}

export default Main;




