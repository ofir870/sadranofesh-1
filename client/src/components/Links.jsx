

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './links.css'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``



class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/home" className="navbar-black">
                    סידור נופש
                </Link>
                <Collapse>
                    <List>
                        <div className="user-name">
                             שלום {localStorage.getItem("name")}
                        </div>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links