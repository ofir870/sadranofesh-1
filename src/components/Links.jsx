

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``



const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})`

`
// 

class Links extends Component {
    render() {
        return (
            
            <React.Fragment>
                <Link to="/home" className="navbar-brand">
                   סידור נופש
                </Link>
                <Collapse>
                    <List>
                        <Item>
                           
                        </Item>
                        <Item>
                            <Link to="/admin" className="nav-link">
                                דף ניהול
                            </Link>
                        </Item>
                        <Item>
                            
                        </Item>
                        <Item>
                            <Link to="/" className="nav-link">
                                לוג אין
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
       
        
        
        )
    }
}

export default Links