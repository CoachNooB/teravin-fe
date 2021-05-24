import React from 'react'
import { makeStyles, fade } from '@material-ui/core/styles'
import {
    AppBar,
    InputBase,
    Toolbar,
    Typography,
} from '@material-ui/core'
import {
    ContactMail,
    Search,
} from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginLeft: 20,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
        display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
            width: '20ch',
            },
        },
    },
    logoutButton: {
        marginLeft: 20,
    }
}));

const MenuBar = (props) => {
    const classes= useStyles()
    const { setSearch } = props
    
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
        <AppBar position="sticky" color="primary" className={classes.appBar}>
            <Toolbar>
                <ContactMail />
                <Typography className={classes.title} >
                    List Employee 
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <Search />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={e => handleSearch(e)}
                    />
                </div>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default MenuBar
