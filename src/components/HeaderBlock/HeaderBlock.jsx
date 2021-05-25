import React from 'react'
import { Actions, Container, Info, PrimaryButton, SecondaryButton, Text } from './HeaderBlockComponents'

function HeaderBlock() {
    return (
        <Container>
            <Info >
                <Text>
                    <h1>Model 3</h1>
                    <h4>Order Online for <span> Touchless Delivery </span></h4>
                </Text>
                <Actions>
                    <PrimaryButton>Custom Order</PrimaryButton>
                    <SecondaryButton>Existing Inventory</SecondaryButton>
                </Actions>
            </Info>
        </Container>
    )
}

export default HeaderBlock
