
import React, { Component } from 'react'
import ReactTable from 'reacttable'
import api from '../api'
import '../style/getUsers.css'
import { Link } from 'react-router-dom' 

import styled from 'styled-components'


const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
    border: black solid 1px 
`

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
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
                userName: users.data.data[0].name

            })

            console.log(' usersList -> render -> users', users)

        })
    }


    onClick(e) {
        e.preventDefault();
        console.log("lala")
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
                                    Header: 'Email',
                                    accessor: 'eamil',
                                    filterable: true,
                                },
            {
                Header: 'Message',
                accessor: 'message',
                
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
        ]
        return (


            <Styles>

                {(
                    <ReactTable data={users} columns={columns} />

                )}
    	
        <Link to="/admin/register" className="nav-link">
        <button class="button" onClick={this.onclick}><span>add User </span></button>
                            </Link>
       
            </Styles>
        )
    }
}

export default GetUsers