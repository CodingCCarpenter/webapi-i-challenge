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
    res.send('Hello World');
});


//once the server is all set up, we can have it 
//'listen' for connectiosn on a particular port.
//the callback function passed as the second arg
//will run once the server starts.
server.listen(8000, () => {
    console.log('API running on port 8000')
})