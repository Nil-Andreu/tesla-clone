import React, {useEffect}  from 'react'
import { animate } from './GsapFunctions.js';

import Land from './Land.jsx';

import {Container,
    Wrap,
    TextContainer,
    Title,
    Paragraph} from './WhatComponents.jsx'


function WhatPage() {
    useEffect(() => {
        animate()
    }, [])

    return (
        <Container id="what">
            <Wrap>
                <TextContainer className="text">
                    <Title>What is Savitar?</Title>
                    <Paragraph><b>Savitar technologies</b> is the agile software development project that has the <b>mission</b> of impressing and satisfying with the web applications created.</Paragraph>

                </TextContainer>
                <div className="land"><Land /></div>
            </Wrap>
        </Container>
    )
}

export default WhatPage;
