import React, { Component, useState } from 'react';
import { Card, TextField, Paper, makeStyles, AppBar, Box, Typography, Toolbar, Grid, Button } from '@material-ui/core';
import { basicStyles } from '../../styles/allstyles'
import { Link } from 'react-router-dom'
import axios from 'axios'

const useMyStyles = makeStyles(basicStyles)

const Task = (props) => {
    const styles = useMyStyles()
    const [userInfo, setUserInfo] = useState({})
    const [message, setMessage] = useState('')

    const signInUser = (e) => {
        e.preventDefault()
        console.log(userInfo)
    }

    return (
        <Card elevation={3}>

            <Box>
                <Box mx={2}>
                    <Typography variant="h3" class>{props.info.title}</Typography>
                </Box>
                <Box mx={5} my={2}>
                    <Typography variant="h5" class>{props.info.description}</Typography>
                    <Typography variant="h5" class>Created At: {props.info.created}</Typography>
                    <Typography variant="h5" class>Due Date: {props.info.duedate}</Typography>

                    {
                        props.info.isComplete ? <Button variant="contained" color="primary">Mark As InComplete</Button> :
                            <Button variant="contained" color="secondary">Mark As Complete</Button>
                    }
                </Box>
            </Box>
        </Card>

    );
}
export default Task