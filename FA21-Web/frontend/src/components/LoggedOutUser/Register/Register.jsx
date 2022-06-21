import React, { Component, useState } from 'react';
import { TextField, Paper, makeStyles, AppBar, Box, Typography, Toolbar, Grid, Button } from '@material-ui/core';
import { basicStyles } from '../../styles/allstyles'
import { Link } from 'react-router-dom'
import axios from 'axios'

const useMyStyles = makeStyles(basicStyles)

const Register = () => {
    const styles = useMyStyles()
    const [userInfo, setUserInfo] = useState({})
    const [message, setMessage] = useState('')
    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })

    }
    const registerUser = (e) => {
        e.preventDefault()
        if (userInfo.password === userInfo.password2) {
            if (userInfo.username.length >= 5) {
                axios.post('http://localhost:4000/api/users', userInfo).then(res => {
                    alert("added user succesfulky")
                }).catch(e => {
                    console.log(e)
                })


            } else {
                setMessage("Username must be of length greater than equalt to 5")
            }

        } else {
            setMessage("Password and retyped password must match")
        }
    }

    return (
        <Box my={10}>
            <Typography variant="h2" component="h1" className={styles.centerBox}>Register</Typography>
            <Box mx={10}>
                <Paper elevation={3}>
                    <form onSubmit={registerUser}>
                        <Box p={3}>
                            <TextField onChange={handleChange} name="username" label="Username" type="text" required variant="outlined" fullWidth />
                        </Box>
                        <Box p={3}>
                            <TextField onChange={handleChange} required name="password" label="Password" variant="outlined" fullWidth />

                        </Box>
                        <Box p={3}>

                            <TextField onChange={handleChange} required name="password2" label="Retype Password" variant="outlined" fullWidth />
                        </Box>
                        <Box p={3} className={styles.centerBox}>

                            <Button type="submit" variant="contained" color="primary">Register</Button>
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
export default Register