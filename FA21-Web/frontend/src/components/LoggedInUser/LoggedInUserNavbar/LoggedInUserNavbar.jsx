import React, { Component } from 'react';
import { makeStyles, AppBar, Box, Typography, Toolbar, Grid, Button } from '@material-ui/core';
import { basicStyles } from '../../styles/allstyles'
import { Link } from 'react-router-dom'
const useMyStyles = makeStyles(basicStyles)
const LoggedInNavbar = () => {
    const styles = useMyStyles()
    //links : register, sign in
    const signOut = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }

    return (
        <AppBar>
            <Toolbar className={styles.centerBox} color='primary'>
                <Grid container spacing={3}  >
                    <Box className={styles.centerBox}>
                        <Grid item md={2}>

                        </Grid>
                        <Grid item md={3}>
                            <Link to="/" className={styles.linkStyle}>
                                <Button variant="contained" color="secondary">
                                    Tasks
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item md={3}>
                            <Link to="/addtask" className={styles.linkStyle}>
                                <Button variant="contained" color="secondary">
                                    AddTask
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item md={3}>
                            <Link to="/statistics" className={styles.linkStyle}>
                                <Button variant="contained" color="secondary">
                                    Statistics
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item md={1}>
                            <Button onClick={signOut} variant="contained" color="secondary">
                                Sign Out
                            </Button>
                        </Grid>
                    </Box>
                </Grid>


            </Toolbar>
        </AppBar>
    );
}
export default LoggedInNavbar;