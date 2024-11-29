const express = require("express");
const router = express.Router();

const TaskController = require("../controller/TaskController");

router.get("/addTask", TaskController.createTask);
router.get("/showAll", TaskController.showTasks);

module.exports = router;
