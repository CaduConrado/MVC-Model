const { raw } = require("mysql2");
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

  static async taskEdit(req, res) {
    const id = req.params.id;
    const task = await Task.findOne({ raw: true, where: { id: id } });
    res.render("tasks/editPage", { task });
  }

  static async taskEditPost(req, res) {
    const id = req.body.id;

    const task = {
      title: req.body.title,
      description: req.body.description,
    };

    await Task.update(task, { where: { id: id } });
    res.redirect("/tasks/showAll");
  }

  static async taskDone(req, res) {
    const id = req.body.id;

    const task = {
      done: req.body.done === "0" ? true : false,
    };
    await Task.update(task, { where: { id: id } });
    res.redirect("/tasks/showAll");
  }
};
