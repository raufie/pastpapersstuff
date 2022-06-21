const router = require("express").Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const taskController = require("../controllers/taskController");

router.post('/', authController.verifyUser, taskController.createTask)
module.exports = router;