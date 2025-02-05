const Joi = require("joi");

//Alla routes
const todoArr = [
    {
        //Hämtar alla todos
        method: 'GET',
        path: '/todos',
        handler: (request, h) => {
            return 'svar';
        }
    },
    {
        //Lagrar ny todo
        method: 'POST',
        path: '/todo',
        handler: (request, h) => {
            return 'svar';
        }
    },
    {
        //Raderar todo
        method: 'DELETE',
        path: '/delete/todo/{id}',
        handler: (request, h) => {
            return 'svar';
        }
    },
    {
        //Uppdaterar todo
        method: 'PUT',
        path: '/update/todo/{id}',
        handler: (request, h) => {
            return 'svar';
        }
    }

]