const express = require("express");
const bodyParser = require("body-parser");
const championRoutes = require("./src/routes/champion");
/* const cors = require("cors") */
const app = express();
const { API_VERSION } = require("./config");

const userRoutes = require("./src/routes/user");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
/* app.use(cors()); */
app.use(`/api/${API_VERSION}`, championRoutes);
app.use(`/api/${API_VERSION}`,userRoutes);

module.exports = app;






