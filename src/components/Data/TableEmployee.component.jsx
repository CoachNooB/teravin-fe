import React from 'react';
import { 
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@material-ui/core';
import TableData from './TableData.component'


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const TableEmployee = (props) => {
    const classes = useStyles();
    const { data, setLoading } = props

    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align='center'>Employee ID</TableCell>
                    <TableCell align='center'>Name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                    <TableCell align='center'>Mobile</TableCell>
                    <TableCell colSpan={3} align='center'>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.length > 0 ? data.map((item) => <TableData setLoading={setLoading} key={item.id} id={item.id} name={item.name} email={item.email} address={item.address} birthday={item.birthday} mobile={item.mobile}  />) : <TableRow><TableCell colSpan={7} align='center'>List is Empty</TableCell></TableRow>
                }
            </TableBody>
        </Table>
        </TableContainer>
    );
}


export default TableEmployee