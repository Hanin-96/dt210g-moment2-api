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
        options: {
            validate: {
                payload: Joi.object( {
                    title: Joi.string().min(3).required(),
                    description: Joi.string().max(200),
                    status: Joi.string().required()
                })
            }
        },
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
        options: {
            validate: {
                payload: Joi.object( {
                    title: Joi.string().min(2),
                    description: Joi.string().max(200),
                    status: Joi.string().required()
                })
            }
        },
        handler: todoController.updateTodo
    }
]

//Exporterar route array
module.exports = todoRouteArr;