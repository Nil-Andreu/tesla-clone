import React from 'react'
import { Container, HeaderBlockInfo, HeaderBlockInfoText } from './HeaderBlockComponents'

function HeaderBlock() {
    return (
        <Container>
            <HeaderBlockInfo >
                <HeaderBlockInfoText>
                    <h1>Model 3</h1>
                    <h4>Order Online for <span> Touchless Delivery </span></h4>
                </HeaderBlockInfoText>
            </HeaderBlockInfo>
        </Container>
    )
}

export default HeaderBlock
