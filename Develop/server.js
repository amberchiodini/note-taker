//Dependencies
const express = require("express"); 

//Set-up the express app
const app = express();

//Set-up a port
const PORT = process.env.PORT || 3000

//Set-up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Setup html and api routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

//Start the server to begin listening
app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
})