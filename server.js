const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');
const middlewares = jsonServer.defaults();

const frontend = path.join(__dirname, "dist/");

// map the requests to the static react build directory
app.use("/", express.static(frontend));

app.use(middlewares);
app.use(router);

// all the unknown requests are redirected to the react SPA
app.use(function(req, res, next) {
  res.sendFile(path.join(frontend, "index.html"));
});

app.listen(port);