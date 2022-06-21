import React, { Component, useState } from 'react';
import { TextField, Paper, makeStyles, AppBar, Box, Typography, Toolbar, Grid, Button } from '@material-ui/core';
import { basicStyles } from '../../styles/allstyles'
import { Link } from 'react-router-dom'
import axios from 'axios'

const useMyStyles = makeStyles(basicStyles)

const SignIn = () => {
    const styles = useMyStyles()
    const [userInfo, setUserInfo] = useState({})
    const [message, setMessage] = useState('')
    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })

    }
    const signInUser = (e) => {
        e.preventDefault()
        console.log(userInfo)
        axios.post("http://localhost:4000/api/users/signin", userInfo).then(res => {
            console.log(res.data.token)

            localStorage.setItem("token", res.data.token)
        }).catch(e => {
            console.log(e)

        })
    }

    return (
        <Box my={10}>
            <Typography variant="h2" component="h1" className={styles.centerBox}>Sign In</Typography>
            <Box mx={10}>
                <Paper elevation={3}>
                    <form onSubmit={signInUser}>
                        <Box p={3}>
                            <TextField onChange={handleChange} name="username" label="Username" type="text" required variant="outlined" fullWidth />
                        </Box>
                        <Box p={3}>
                            <TextField onChange={handleChange} required name="password" label="Password" variant="outlined" fullWidth />

                        </Box>

                        <Box p={3} className={styles.centerBox}>

                            <Button type="submit" variant="contained" color="primary">Sign In</Button>
                        </Box>
                        <Box p={3} className={styles.centerBox}>
                            <Typography variant="h6" component="h6">{message}</Typography>
                        </Box>
                    </form>
                </Paper>
            </Box>
        </Box>
    );
}
export default SignIn