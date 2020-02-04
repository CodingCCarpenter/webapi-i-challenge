// implement your API here
//first we need to import express, an npm module.
//We do that by running 'npm install' or 'yarn add'
const express = require('express');

//this creates our express application using 
//the express module. This basically IS our server.
const server = express();

//configures the server to execute a function 
//for every GET request to '/'
server.get('/', (req, res) => {
    //express will pass the request and 
    //response objects to this function. 
    //The .send() on the res obj can be used to 
    //send a res to the client
    res.send('Hello World!');
});

server.get('/hobbits', (req, res) => {
    const hobbits = [
        {
            id: 1,
            name: 'Samwise Gamgee'
        },
        {
            id: 2,
            name: 'Frodo Baggins'
        }
    ];

    res.status(200).json(hobbits);
})


//once the server is all set up, we can have it 
//'listen' for connectiosn on a particular port.
//the callback function passed as the second arg
//will run once the server starts.
server.listen(8000, () => {
    console.log('API running on port 8000')
})

/* 

***WHAT HAVE WE LEARNED?***
-How to use express to create a web API
-What Endpoints are and how to create  them.
-How to respond to GET Requests.
-How to return JSON Data
-How to return the correct HTTP Status Codes.

*/