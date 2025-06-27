const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Static folder (optional, but common)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
