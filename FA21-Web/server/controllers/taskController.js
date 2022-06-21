const Task = require("../model/Task")
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (e) {
        res.status(400).json({ message: "error creating task" })
    }

}
const changeTaskStatus = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate({ _id: req.params.id }, { iscomplete: req.body.iscomplete })
        res.status(200).json(task)
    } catch (e) {
        res.status(400).json({ message: "error updating task" })
    }
}
const getWeeklyTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ duedate: { $gte: new Date(new Date().setDate(new Date().getDate() - 7)) } })
        res.status(200).json(tasks)
    } catch (e) {
        res.status(400).json({ message: "error getting tasks" })
    }
}
const getMonthlyTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ duedate: { $gte: new Date(new Date().setDate(new Date().getDate() - 30)) } })
        res.status(200).json(tasks)
    } catch (e) {
        res.status(400).json({ message: "error getting tasks" })
    }
}
const getUserTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.params.user })
        res.status(200).json(tasks)
    }
    catch (e) {
        res.status(400).json({ message: "error getting tasks" })
    }
}
exports.createTask = createTask
exports.changeTaskStatus = changeTaskStatus
exports.getWeeklyTasks = getWeeklyTasks
exports.getMonthlyTasks = getMonthlyTasks
exports.getUserTasks = getUserTasks