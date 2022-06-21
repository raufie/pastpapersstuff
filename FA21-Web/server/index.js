const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
//routes
const taskRoutes = require("./routes/taskRoutes")
const userRoutes = require("./routes/userRoutes")

mongoose.connect('mongodb://localhost:27017/task').then(res => {
    console.log("connected to db")
}).catch(e => {
    console.log("error connecting with mongodb")
})
const app = express();
app.use(express.json())
app.use(cors())

app.use("/api/users", userRoutes)
app.use("/api/tasks", taskRoutes)

app.listen(4000, () => {
    console.log("listening to requests at localhost:4000")
})