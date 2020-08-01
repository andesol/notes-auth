const express = require('express');
const Note = require('./models/note');
const usersRouter = require('./controllers/users');
const notesRouter = require('./controllers/notes');

const app = express();

app.use(express.json())
app.use('/api/users', usersRouter)
app.use('/api/notes', notesRouter)


module.exports = app;