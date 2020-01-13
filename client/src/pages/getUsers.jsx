
import React, { Component } from 'react'
import ReactTable from 'reacttable'
import api from '../api'

import styled from 'styled-components'

// import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
    border: black solid 1px 
`


class GetUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            columns: [],
            userName: ""

        }
    }

    componentDidMount = async () => {

        await api.getUsers().then(users => {
            this.setState({
                users: users.data.data,
                userName:users.data.data[0].name

            })
            
            console.log(' usersList -> render -> users', users)
                      
        })
    }


    onSubmit(e) {
        e.preventDefault();
        console.log("sdsds")
        window.location = '/admin'
    }

    render() {


        const users = this.state.users;

        const columns = [

            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Password',
                accessor: 'password',
                filterable: true,
            },
            {
                Header: 'Message',
                accessor: 'message',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
        ]
        return (


            <Wrapper>

                {(
                    <ReactTable data={users} columns={columns} />

                )}
            </Wrapper>
        )
    }
}

export default GetUsers