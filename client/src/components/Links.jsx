

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

    logOut() {
        sessionStorage.clear()
    }

    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-black" onClickCapture={this.logOut}>
                    יציאה
                </Link>
                    {sessionStorage.getItem("isLoggedIn-admin") ?

                        <Link to="/admin" className="navbar-black">
                            דף מנהל
                                     </Link> : <div></div>}

                <Link to="/home" className="navbar-black">
                    דף הבית
                </Link>
                <Collapse>
                    <List>
                        <div className="user-name">
                            שלום {sessionStorage.getItem("name")}
                        </div>


                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links