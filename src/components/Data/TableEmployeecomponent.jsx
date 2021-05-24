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


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const TableEmployee = () => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align='center'>Employee ID</TableCell>
                    <TableCell align='center'>Name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                    <TableCell align='center'>Mobile</TableCell>
                    <TableCell align='center'>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            
            </TableBody>
        </Table>
        </TableContainer>
    );
}


export default TableEmployee