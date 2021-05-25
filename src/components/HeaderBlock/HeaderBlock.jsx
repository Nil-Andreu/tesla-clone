import React from 'react'
import { Actions, Container, Info, Text } from './HeaderBlockComponents'

function HeaderBlock() {
    return (
        <Container>
            <Info >
                <Info>
                    <h1>Model 3</h1>
                    <h4>Order Online for <span> Touchless Delivery </span></h4>
                </Info>
                <Actions>
                    <PrimaryButton>Custom Order</PrimaryButton>
                    <SecondaryButton>Existing Inventory</SecondaryButton>
                </Actions>
            </Info>
        </Container>
    )
}

export default HeaderBlock
