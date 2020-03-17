import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'

const Container = styled.div.attrs({
    className: 'header',
})`

display: grid;
text-alien: right;
color: black;

`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg rtl ',
})`
margin-bottom: 20 px;

    direction: rtl;
    background-color: #85C332;
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Links />
                    <Logo/>
                </Nav>
            </Container>
        )
    }
}

export default NavBar