const Task = require("../models/Task");

module.exports = class TaskController {
  static addTask(req, res) {
    res.render("tasks/create");
  }

  static async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true });
    res.render("tasks/all", { tasks });
  }

  static async saveTask(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    };
    await Task.create(task);
    res.redirect("/tasks/showAll");
  }

  static async deleteTask(req, res) {
    const id = req.body.id;
    await Task.destroy({ where: { id: id } });
    res.redirect("/tasks/showAll");
  }
};
