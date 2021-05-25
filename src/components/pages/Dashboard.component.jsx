import React, { useState, useEffect } from 'react'
import {
    Container,
} from '@material-ui/core';
import axios from 'axios'

import MenuBar from '../../components/navigation/MenuBar.component'
import TableEmployee from '../Data/TableEmployee.component'
import AddEmployee from '../Data/AddEmployee.component';

const Dashboard = () => {
    const [employee, setEmployee] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(() => {
        const config = {
            method: 'get',
            url: 'http://localhost:5000/users',
        };
        
        axios(config)
        .then(res => {
            setLoading(false)
            setEmployee([...res.data.data.Employee])
        })
        .catch(err => console.log(err))
    },[loading])

    const filtered = employee.filter((data) => {
        return data.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <Container maxWidth='lg'>
            <MenuBar setSearch={setSearch} />
            <AddEmployee setLoading={setLoading} />
            <TableEmployee setLoading={setLoading} data={filtered} />
        </Container>
    )
}

export default Dashboard
