import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../f2.jfif'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})`

`

class Logo extends Component {
    render() {
        return (
            <Wrapper >
                <img src={logo} width="50" height="50" alt="sambarros.com" />
            </Wrapper>
        )
    }
}

export default Logo