import React, { useState } from 'react'
import {
    TableCell,
    TableRow,
} from '@material-ui/core';

import DetailEmployee from './DetailEmployee.component'
import EditEmployee from './EditEmployee.component'
import DeleteEmployee from './DeleteEmployee.component'

const TableData = (props) => {
    const { setLoading, id, name, email, mobile, address, birthday } = props
    const [person, setPerson] = useState({
        id,
        name,
        email,
        mobile,
        birthday,
        address
    })
    return (
        <TableRow>
            <TableCell align='center'>{id}</TableCell>
            <TableCell align='center'>{name}</TableCell>
            <TableCell align='center'>{email}</TableCell>
            <TableCell align='center'>{mobile}</TableCell>
            <TableCell align='center'><DetailEmployee person={person} /></TableCell>
            <TableCell align='center'><EditEmployee setLoading={setLoading} person={person} setPerson={setPerson} /></TableCell>
            <TableCell align='center'><DeleteEmployee setLoading={setLoading} person={person} /></TableCell>
        </TableRow>
    )
}

export default TableData
