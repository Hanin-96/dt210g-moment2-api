//Initierar Mongoose
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
        required: false,
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

//Skapar upp Todo tabell
const Todo = Mongoose.model("todo", todoSchema);

//Export
module.exports = Todo;