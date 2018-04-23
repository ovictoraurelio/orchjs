'use strict';

/**
 * Main application file
 */

import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import errorHandler from 'errorhandler';
import http from 'http';
import socketIO from 'socket.io';
import dotenv from 'dotenv';
import routes from './routes';
import socket from './socket';
//require('./socket')(socketIO, server);

// Setup server
var app = express();
var server = http.createServer(app);

const config = dotenv.config({
  path: (process.env.NODE_ENV || 'development' ) + '.env'
}).parsed;

// Configure Express
app.use(compression());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cookieParser());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");

  //intercepts OPTIONS method
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Start server
function startServer() {
  server.listen(config.PORT, function () {    
    console.log('\x1b[36m%s\x1b[0m', 'Express server listening on ' + config.PORT + ' in ' + config.NODE_ENV + ' mode.');    
  });  
}

app.use('/', routes);

startServer();

// Expose app
exports = module.exports = app;