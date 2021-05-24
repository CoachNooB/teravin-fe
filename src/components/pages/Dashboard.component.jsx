import React from 'react'
import {
    Container,
} from '@material-ui/core';

import MenuBar from '../../components/navigation/MenuBar.component'
import TableEmployee from '../Data/TableEmployeecomponent'
import AddEmployee from '../Data/AddEmployee.component';

const Dashboard = () => {
    return (
        <Container maxWidth='lg'>
            <MenuBar />
            <AddEmployee />
            <TableEmployee />
        </Container>
    )
}

export default Dashboard
