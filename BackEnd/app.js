// ` import express
const express = require("express");

// ` import dotenv
require("dotenv").config();

// ` create a port from env file
const port = process.env.PORT;

// ` import routes
const routes = require("./routes/index");

// ` create web server
const app = express();

// ` Add the routes to the application as middleware
app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ` create app listener

app.listen(port, () => {
  console.log(` listening on http://localhost:${port}`);
});

// ` export app

module.exports = app;
