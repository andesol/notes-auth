const User = require('../models/user');
const Note =  require('../models/note');
const { populate } = require('../models/note');

const notesRouter = require('express').Router();

notesRouter.get('/', async (req, res) => {

    const notes = await Note
        .find({})
        .populate('user', {name: 1, username: 1})
    console.log(notes)
    res.json(notes)

})

notesRouter.post('/', async (req,res) => {

    const body = req.body;
    const user = await User.findById(body.userId);
    const newNote = new Note({
        title: body.title,
        content: body.content,
        date: new Date(),
        user: user.id
    })

    const savedNote = await newNote.save();
    user.notes = [...user.notes, savedNote._id];
    await user.save()

    res.json(savedNote);

})

module.exports = notesRouter;