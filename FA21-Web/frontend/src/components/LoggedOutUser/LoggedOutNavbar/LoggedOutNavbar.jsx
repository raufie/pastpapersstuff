import React, { Component } from 'react';
import { makeStyles, AppBar, Box, Typography, Toolbar, Grid, Button } from '@material-ui/core';
import { basicStyles } from '../../styles/allstyles'
import { Link } from 'react-router-dom'
const useMyStyles = makeStyles(basicStyles)
const LoggedOutNavbar = () => {
    const styles = useMyStyles()
    //links : register, sign in
    return (
        <AppBar>
            <Toolbar className={styles.centerBox} color='primary'>
                <Grid container spacing={3}  >
                    <Grid item md={4}>

                    </Grid>
                    <Grid item md={4}>
                        <Link to="/register" className={styles.linkStyle}>
                            <Button variant="contained" color="secondary">
                                Register
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item md={4}>
                        <Link to="/signin" className={styles.linkStyle}>
                            <Button variant="contained" color="secondary">
                                Sign In
                            </Button>
                        </Link>
                    </Grid>
                </Grid>


            </Toolbar>
        </AppBar>
    );
}
export default LoggedOutNavbar;