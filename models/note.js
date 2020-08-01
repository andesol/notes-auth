const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        console.log('Connected to MongoDB')
    })
    .catch(err => {
        console.log('Error connecting to Mongo DB: ', err.message);
    })

const noteSchema = new mongoose.Schema({
    title: String,
    content: {
        type: String, 
        required: true,
        minlength: 5,
    },
    date: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Note', noteSchema)