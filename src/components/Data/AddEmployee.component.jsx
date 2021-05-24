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

    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [job, setJob] = React.useState('')
    const [company, setCompany] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [error, setError] = React.useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const handleJobChange = (e) => {
        setJob(e.target.value)
    }
    const handleCompanyChange = (e) => {
        setCompany(e.target.value)
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
    };

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('phone', phone)
        formData.append('job', job)
        formData.append('company', company)
        formData.append('email', email)

        const config = {
            method: 'post',
            url: 'http://localhost:5000/users',
            data: formData
        }

        axios(config)
        .then((res) => {
            console.log(res);
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
                            <TextField error={!name?true:false} required id="name" label="Name" onChange={(e) => handleNameChange(e)} fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <AlternateEmailRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField id="email" label="Email" onChange={(e) => handleEmailChange(e)} fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <PhoneRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField id="phone" label="Phone Number" onChange={(e) => handlePhoneChange(e)} fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <CalendarTodayRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField pattern='' id="job" label="Birthday" onChange={(e) => handleJobChange(e)} fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <HomeWorkRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField id="company" label="Address" onChange={(e) => handleCompanyChange(e)} fullWidth/>
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
