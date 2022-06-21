const router = require("express").Router();
const authController = require("../controllers/authController")
const taskController = require("../controllers/taskController")

const userController = require("../controllers/userController")
//sign in user
router.post("/signin", authController.signInUser)
router.post("/", authController.createUser)

router.get("/tasks", authController.verifyUser, taskController.getUserTasks)
router.get("/verify", authController.verifyClient)
module.exports = router