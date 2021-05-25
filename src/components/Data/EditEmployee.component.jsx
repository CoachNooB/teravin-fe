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
    FaceRounded,
    ContactMailRounded,
    PhoneRounded,
    CalendarTodayRounded,
    HomeWorkRounded,
    AlternateEmailRounded, 
} from '@material-ui/icons'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
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

const EditEmployee = (props) => {
    const { person, setPerson, setLoading } = props
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [snack, setSnack] = React.useState(false)

    const [name, setName] = React.useState(person.name)
    const id = person.id
    const [phone, setPhone] = React.useState(person.mobile)
    const [birthday, setBirthday] = React.useState(person.birthday)
    const [email, setEmail] = React.useState(person.email)
    const [address, setAddress] = React.useState(person.address)

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
        setOpen(false);
    };

    const renewDetail = () => {
        setPerson({
            ...person,
            name,
            email,
            address,
            mobile: phone,
            birthday,
        })
        setLoading(true)
    }

    const handleEdit = () => {
        const formData = {
            name,
            email,
            address,
            mobile: phone,
            birthday,
        }

        const config = {
            method: 'put',
            url: `http://localhost:5000/users/${id}`,
            data: formData
        }
        
        axios(config)
        .then((res) => {
            renewDetail()
            handleClose()
            openSnack()
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    
    return(
        <>
            <Button variant='contained' onClick={handleClickOpen} style={{backgroundColor: 'orange'}}>
                Edit
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
                <DialogTitle id="alert-dialog-slide-title">{"Edit Employee"}</DialogTitle>
                <DialogContent className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <ContactMailRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField name="id" label="Employee ID" value={id} disabled fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <FaceRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField required name="name" label="Name" value={name} onChange={(e) => handleNameChange(e)} fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <AlternateEmailRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' name="email" label="Email" value={email} onChange={(e) => handleEmailChange(e)} fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <PhoneRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField pattern='^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$' name="phone" label="Phone Number" value={phone} onChange={(e) => handlePhoneChange(e)} fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <CalendarTodayRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField pattern='' name="birthday" label="Birthday" value={birthday} onChange={(e) => handleBirthdayChange(e)} fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={2}>
                            <HomeWorkRounded />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField name="address" label="Address" value={address} onChange={(e) => handleAddressChange(e)} fullWidth/>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button variant='contained' onClick={handleEdit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={snack}
                onClose={closeSnack}
                TransitionComponent={Transition}
                anchorOrigin={{vertical:'top', horizontal:'center'}}
                autoHideDuration={4000}
            >
                <SnackbarContent message='Contact Edited Succesfully !' style={{ backgroundColor: 'green' }} />
            </Snackbar>
        </>
    )
}

export default EditEmployee