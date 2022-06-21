import React, { Component, useState } from 'react';
import { TextField, Paper, makeStyles, AppBar, Box, Typography, Toolbar, Grid, Button } from '@material-ui/core';
import { basicStyles } from '../../styles/allstyles'
import { Link } from 'react-router-dom'
import axios from 'axios'

const useMyStyles = makeStyles(basicStyles)

const AddTask = () => {
    const styles = useMyStyles()
    const [userInfo, setUserInfo] = useState({})
    const [message, setMessage] = useState('')
    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })

    }
    const addTask = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/api/tasks', userInfo, { headers: { 'x-auth-token': localStorage.getItem("token") } }).then(res => {

            alert("successfully aded")
        }).catch(e => {
            console.log('error adding')
        })
    }

    return (
        <Box my={10}>
            <Typography variant="h2" component="h1" className={styles.centerBox}>Add Task</Typography>
            <Box mx={10}>
                <Paper elevation={3}>
                    <form onSubmit={addTask}>
                        <Box p={3}>
                            <TextField onChange={handleChange} name="title" label="Title" type="text" required variant="outlined" fullWidth />
                        </Box>
                        <Box p={3}>
                            <TextField onChange={handleChange} name="description" label="Description" type="text" required variant="outlined" fullWidth />
                        </Box>
                        <Box p={3}>
                            <TextField onChange={handleChange} name="duedate" type="date" required variant="outlined" fullWidth />
                        </Box>
                        <Box p={3}>
                            <Button type="submit" variant="contained" color="primary">Add Task</Button>
                        </Box>
                    </form>
                </Paper>
            </Box>
        </Box>
    );
}
export default AddTask