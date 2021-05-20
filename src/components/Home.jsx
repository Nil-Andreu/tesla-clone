import React from 'react'
import styled from 'styled-components'

import Main from './Main/Main.jsx'
import WhatPage from './WhatPage/WhatPage.jsx'
import WhyPage from './WhyPage/WhyPage.jsx'

function Home() {
    return (
        <Container>
            <Main />
            <WhatPage />
            <WhyPage />
        </Container>
    )
}

export default Home;

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`;
