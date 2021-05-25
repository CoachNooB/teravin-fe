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
} from '@material-ui/core'
import {
    ContactMailRounded,
    FaceRounded,
    PhoneRounded,
    HomeWorkRounded,
    AlternateEmailRounded,
    CalendarTodayRounded,
} from '@material-ui/icons'

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

const DetailEmployee = (props) => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const { person } = props

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false)
    };
    return (
        <>
            <Button variant='contained' color='primary' onClick={handleClickOpen}>
                Detail
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
                <DialogTitle id="alert-dialog-slide-title">{"Detail Employee"}</DialogTitle>
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
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DetailEmployee
