import React from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    Grid,
    makeStyles,
    Slide,
    TextField,
    Typography,
} from '@material-ui/core'
import {
    ContactMailRounded,
    FaceRounded,
    PhoneRounded,
    HomeWorkRounded,
    AlternateEmailRounded,
    CalendarTodayRounded,
} from '@material-ui/icons'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(2),
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
})

const DeleteEmployee = (props) => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const { person, setLoading } = props

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false)
    };

    const handleDelete = () => {
        const config = {
            method: 'delete',
            url: `http://localhost:5000/users/${person.id}`,
        }
        
        axios(config)
        .then((res) => {
            console.log(res)
            setLoading(true)
            handleClose()
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <Button variant='contained' color='secondary' onClick={handleClickOpen}>
                Delete
            </Button>
            <Dialog
                open={open}
                disableBackdropClick
                TransitionComponent={Transition}
                keepMounted
                fullWidth
                maxWidth='sm'
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Delete Employee"}</DialogTitle>
                <DialogContent className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <ContactMailRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField required name="id" label="Employee ID" value={person.id} disabled fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <FaceRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField required name="name" label="Name" value={person.name} disabled fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <AlternateEmailRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField  name="email" label="Email" value={person.email} disabled fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <PhoneRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField  name="phone" label="Phone Number" value={person.mobile} disabled fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <CalendarTodayRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField name="birthday" label="Birthday" value={person.birthday} disabled fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <HomeWorkRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField name="address" label="Address" value={person.address} disabled fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={12}>
                            <Typography className={classes.margin}>Are you sure want to delete employee?</Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <Button variant='contained' onClick={handleDelete} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DeleteEmployee
