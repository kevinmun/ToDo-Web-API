import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config';
import routes from './api/routes/ToDoListRoutes';

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(config.dbUrl);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

console.log(`todo list RESTful API server started on: ${port}`);

