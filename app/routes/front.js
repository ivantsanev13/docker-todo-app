const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();

// Home Route - Fetch and Display All Tasks
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();  // Get all tasks
        res.render('todos', { tasks: todos });  // Render the EJS view with tasks
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.redirect('/');
    }
});

// POST - Add a New Task
router.post('/', async (req, res) => {
    const newTask = new Todo({
        task: req.body.task
    });

    try {
        await newTask.save();
        res.redirect('/');
    } catch (error) {
        console.log('Error adding task:', error);
        res.redirect('/');
    }
});

// POST - Update an existing task
router.post('/todo/update', async (req, res) => {
    const { _key, task } = req.body;  // Get the task ID and new task content

    try {
        await Todo.findByIdAndUpdate(_key, { 
            task: task, 
            updated_at: Date.now()  // Update the task and set the new updated_at time
        });
        res.redirect('/');  // Redirect back to the homepage after successful update
    } catch (error) {
        console.log('Error updating task:', error);
        res.redirect('/');
    }
});


// POST - Delete a Task
router.post('/todo/destroy', async (req, res) => {
    const taskKey = req.body._key;

    try {
        await Todo.findByIdAndRemove(taskKey);
        res.redirect('/');
    } catch (error) {
        console.log('Error deleting task:', error);
        res.redirect('/');
    }
});

module.exports = router;
