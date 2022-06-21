import React, { Component, useState } from 'react';
import { TextField, Paper, makeStyles, AppBar, Box, Typography, Toolbar, Grid, Button } from '@material-ui/core';
import { basicStyles } from '../../styles/allstyles'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Task from './Task'
const useMyStyles = makeStyles(basicStyles)

const Tasks = () => {
    const styles = useMyStyles()
    const [userInfo, setUserInfo] = useState({})
    const [message, setMessage] = useState('')
    const [tasks, setTasks] = useState([
        {
            _id: "ASgasdasfg",
            title: "Task 1",
            description: "This is task 1",
            isComplete: false,
            created: "2020-01-01",
            duedate: "2020-01-01",
        },
        {
            _id: "ASgasdasfg",
            title: "Task 1",
            description: "This is task 1",
            isComplete: false,
            created: "2020-01-01",
            duedate: "2020-01-01",
        },
        {
            _id: "ASgasdasfg",
            title: "Task 1",
            description: "This is task 1",
            isComplete: false,
            created: "2020-01-01",
            duedate: "2020-01-01",
        }
    ])
    const signInUser = (e) => {
        e.preventDefault()
        console.log(userInfo)
    }

    return (
        <Box my={10}>
            <Typography variant="h2" component="h1" className={styles.centerBox}>Sign In</Typography>
            <Box mx={10}>
                {tasks.map(task => {
                    return (
                        <Box mx={10} my={5}>

                            <Task info={task} />
                        </Box>
                    )
                })}
            </Box>
        </Box>
    );
}
export default Tasks