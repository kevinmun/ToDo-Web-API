import Task from '../models/ToDoListModel';

export const listAllTask = (req, res) => {
  Task.find({}, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

export const createTask = (req, res) => {
  const newTask = new Task(req.body);
  newTask.save((err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

