const Todo = require("../models/todo.model");

//Hämtar alla lagrade todos
exports.getTodos = async (request, h) => {
    try {
        const todos = await Todo.find();

        return h.response({
            message: "Lagrade todos",
            storedTodos: todos
        }).code(200);

    }
    catch (error) {
        return h.response({
            errorMessage: "Något gick fel på serversidan"
        }).code(500);
    }
}

//Lägger till ny todo
exports.postTodo = async (request, h) => {
    try {
        const todo = new Todo(request.payload);
        const postTodo = await todo.save();

        return h.response({
            message: "Ny todo är lagrad",
            storedTodo: postTodo
        }).code(200);

    }
    catch (error) {
        return h.response({
            errorMessage: "Något gick fel på serversidan"
        }).code(500);
    }
}

//Raderar todo 
exports.deleteTodo = async (request, h) => {
    try {
        const deleteTodoEl = await Todo.findByIdAndDelete(request.params.id);
        return h.response({
            message: "Följande todo är raderad",
            deletedTodo: deleteTodoEl
        }).code(200);
    }
    catch (error) {
        return h.response({
            errorMessage: "Något gick fel på serversidan"
        }).code(500);
    }
}

//Uppdaterar todo
exports.updateTodo = async (request, h) => {
    try {
        const updateTodoEl = await Todo.findByIdAndUpdate(
            request.params.id,
            request.payload,
            { new: true }
        );
        return h.response({
            message: "Följande todo är uppdaterad",
            updatedTodo: updateTodoEl
        }).code(200);
    }
    catch (error) {
        return h.response({
            errorMessage: "Något gick fel på serversidan"
        }).code(500);
    }
}