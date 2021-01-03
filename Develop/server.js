//Dependencies
const express = require("express"); 
const fs = require("fs");
const path = require("path");

//Set-up the express app
const app = express();

//Set-up a port
const PORT = process.env.PORT || 3000

//Set-up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public/'));

//Set-up html and api routes
require("./routes/routes")(app);

//Start the server to begin listening
app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
})