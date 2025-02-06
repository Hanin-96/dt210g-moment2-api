const Joi = require("joi");
const todoController = require("../controllers/todo.controller")

//Alla routes
const todoRouteArr = [
    {
        //Hämtar alla todos
        method: 'GET',
        path: '/todos',
        handler: todoController.getTodos
    },
    {
        //Lagrar en ny todo
        method: 'POST',
        path: '/todo',
        handler: todoController.postTodo
    },
    {
        //Raderar en todo
        method: 'DELETE',
        path: '/delete/todo/{id}',
        handler: todoController.deleteTodo
    },
    {
        //Uppdaterar en todo
        method: 'PUT',
        path: '/update/todo/{id}',
        handler: todoController.updateTodo
    }
]

//Exporterar route array
module.exports = todoRouteArr;