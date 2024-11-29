const express = require("express");
const router = express.Router();

const TaskController = require("../controller/TaskController");

router.get("/createTask", TaskController.addTask);
router.get("/showAll", TaskController.showTasks);
router.post("/createTask", TaskController.saveTask);
router.post("/deleteTask", TaskController.deleteTask);
module.exports = router;
