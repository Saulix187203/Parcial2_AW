const express = require('express');
const config = require("./config");
const app = express();
//config
app.set('port', config.app.port)
//rutas
module.exports = app;