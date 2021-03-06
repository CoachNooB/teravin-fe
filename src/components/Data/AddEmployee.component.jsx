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
    Snackbar,
    SnackbarContent,
} from '@material-ui/core'
import { 
    Add, 
    FaceRounded,
    PhoneRounded,
    HomeWorkRounded,
    AlternateEmailRounded,
    CalendarTodayRounded,
} from '@material-ui/icons'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    fabButton: {
        position: 'relative',
        left: '80%',
        margin: 10,
    },
    margin: {
        margin: theme.spacing(1),
    },
    fileInput: {
        marginTop: theme.spacing(2),
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
})

const AddEmployee = (props) => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [snack, setSnack] = React.useState(false)
    const { setLoading } = props

    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [birthday, setBirthday] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [error, setError] = React.useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const handleBirthdayChange = (e) => {
        setBirthday(e.target.value)
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const openSnack = () => {
        setSnack(true)
    }

    const closeSnack = () => {
        setSnack(false)
    }
    
    const handleClose = () => {
        setOpen(false)
        setName('')
        setEmail('')
        setPhone('')
        setAddress('')
        setBirthday('')
    };

    const handleSubmit = () => {
        const formData = {
            name,
            email,
            mobile: phone,
            birthday,
            address,
        }

        const config = {
            method: 'post',
            url: 'http://localhost:5000/users',
            data: formData
        }

        axios(config)
        .then((res) => {
            console.log(res);
            setLoading(true)
            handleClose()
            openSnack()
        })
        .catch(err => {
            setError(err)
            console.log(error)
        })

    }

    return (
        <>
            <Button className={classes.fabButton} variant='contained' color='secondary' onClick={handleClickOpen}>
                <Add />Add Employee
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
                <DialogTitle id="alert-dialog-slide-title">{"Add New Employee"}</DialogTitle>
                <DialogContent className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <FaceRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField required id="name" label="Name" value={name} onChange={(e) => handleNameChange(e)} fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <AlternateEmailRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' id="email" label="Email" value={email} onChange={(e) => handleEmailChange(e)} fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <PhoneRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField pattern='^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$' id="phone" label="Phone Number" value={phone} onChange={(e) => handlePhoneChange(e)} fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <CalendarTodayRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField pattern='' id="birthday" label="Birthday" value={birthday} onChange={(e) => handleBirthdayChange(e)} fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <HomeWorkRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField id="address" label="Address" value={address} onChange={(e) => handleAddressChange(e)} fullWidth/>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button variant='contained' onClick={handleSubmit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={snack}
                onClose={closeSnack}
                TransitionComponent={Transition}
                anchorOrigin={{vertical:'top', horizontal:'center'}}
                autoHideDuration={2000}
            >
                <SnackbarContent message='New Contact Added Succesfully !' style={{ backgroundColor: 'green' }} />
            </Snackbar>
        </>
    )
}

export default AddEmployee
