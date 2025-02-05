//Initierar Mongoose
const { string, required } = require('joi');
const Mongoose = require('mongoose');

//Model schema över vad som ska lagras i todo
const todoSchema = new Mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    description: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    status: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    }

})