const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// MongoDB connection using the Docker service name `todo-database`
mongoose.connect('mongodb://todo-database:27017/todoapp', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Import routes
const frontRouter = require('./routes/front');
app.use('/', frontRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
