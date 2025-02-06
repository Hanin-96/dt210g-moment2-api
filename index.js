"use strict"

//Initierar Hapi
const Hapi = require('@hapi/hapi');

//Användning av .env fil för användning av variabler
require("dotenv").config();

//Hämtar todo route
const todoRoutes = require('./routes/todo.route');

//Hämtar databas koppling
const databaseConnection = require('./database/todo.database');

const init = async () => {

    //Server
    const server = Hapi.server({
        port: process.env.PORT || 5000,
        //host: '0.0.0.0',
        host: "localhost" || '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'], 
            }
        }
    });

    //Koppling till MongoDb
     databaseConnection();

    //Routes
    server.route(todoRoutes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();



