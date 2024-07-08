const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

// App configuration
const app = express();
app.use(bodyParser.json());

// Array to store tasks
let tasks = [];

// API to create a new task
app.post('/tasks', (req, res) => {
  const task = { id: uuidv4(), ...req.body };
  tasks.push(task);
  res.status(201).send(task);
});

// API to retrieve all tasks
app.get('/tasks', (req, res) => {
  res.status(200).send(tasks);
});

// API to update a task's status
app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
    res.status(200).send(tasks[taskIndex]);
  } else {
    res.status(404).send({ message: 'Task not found' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
