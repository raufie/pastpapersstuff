import React, { Component, useState } from 'react';
import { TextField, Paper, makeStyles, Card, AppBar, Box, Typography, Toolbar, Grid, Button } from '@material-ui/core';
import { basicStyles } from '../../styles/allstyles'
import { Link } from 'react-router-dom'
import axios from 'axios'
const useMyStyles = makeStyles(basicStyles)

const Statistics = () => {
    const styles = useMyStyles()
    const [userInfo, setUserInfo] = useState({})
    const [tasksThisWeek, setTasksThisWeek] = useState(66)
    const [tasksThisMonth, setTasksThisMonth] = useState(99)
    return (
        <Box my={10}>
            <Typography variant="h2" component="h1" className={styles.centerBox}>Statistics</Typography>
            <Box mx={20}>
                <Card>
                    <Typography variant="h4" component="h1" className={styles.centerBox}>Tasks done this week</Typography>

                    <Box mx={10} className={styles.centerBox}>
                        <Typography variant="h4">  {tasksThisWeek}</Typography>
                    </Box>
                </Card>

            </Box>

            <Box mx={20} my={2}>
                <Card>
                    <Typography variant="h4" component="h1" className={styles.centerBox}>Tasks done this month  </Typography>

                    <Box mx={10} className={styles.centerBox}>
                        <Typography variant="h4">  {tasksThisMonth}</Typography>
                    </Box>
                </Card>

            </Box>
        </Box>
    );
}
export default Statistics