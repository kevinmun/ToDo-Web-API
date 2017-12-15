import { listAllTask, createTask } from '../controllers/ToDoListController';

const routes = (app) => {
  app.route('/tasks')
    .get(listAllTask)
    .post(createTask);
};

module.exports = routes;
