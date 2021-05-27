import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Header, Logo, Language} from './LoginComponents'

import LanguageOutLinedIcon from '@material-ui/icons/LanguageOutlined'

function Login() {
    return (
        <Container>
            <Header>
                <Logo>
                    <Link>
                        <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="" />
                    </Link>
                </Logo>
                <Language>
                    <LanguageOutLinedIcon />
                    <span>es-SP</span>
                </Language>
            </Header>
        </Container>
    )
}

export default Login
