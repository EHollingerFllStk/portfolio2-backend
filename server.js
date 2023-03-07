////DEPENDENCIES/////
// get .env variables 
require("dotenv").config();
//pull PORT from .env, give default value of 4000
const  { PORT = 4000 } = process.env.PORT;
const cors = require("cors");

//import express
const express = require("express");

// import project.json file
const projects = require("./projects.json");

// create application object
const app  = express();


////MIDDLEWARE///////
app.use(cors());//to prevent cors errors,

//////ROUTES///////
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

// route to retrieve projects
app.get("/projects", (req, res) => {
    //send projects via JSON
    res.json(projects);
});


///////LISTENER//////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));