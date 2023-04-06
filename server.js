// require express and bodyParser
const express = require("express");
const bodyParser = require("body-parser");

// create express app
const app = express();

// define port to run express app
const port = process.env.PORT || 3100;

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import DB Connection
require("./config/db");

// Import API route
var routes = require("./api/routes/Routes"); //importing route
routes(app);

// Add endpoint
app.get("/", (req, res) => {
  res.send("DB CONNECT");
});

// Listen to server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
