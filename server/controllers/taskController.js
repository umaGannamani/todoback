const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const task = await Task.create({ title, description, status, userId: req.user.id });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { userId: req.user.id } });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateTask = async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const task = await Task.update(
      { title, description, status },
      { where: { id: req.params.id, userId: req.user.id } }
    );
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.destroy({ where: { id: req.params.id, userId: req.user.id } });
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
