import React from 'react'
import styled from 'styled-components'

// I get the name, the type and onclick event (which are properties passed in the login.jsx)
const buttonPrimary = (name, type, onClick) => {
    return (
        <div onClick={onClick} type={type}>
            {name}
        </div>
    )
}

export default buttonPrimary
