var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
//DB
var mongoose = require('mongoose');
var users = require('./models/character');
var config = require('./config');

//async.waterfall HTTP requests to Eve online API
var async = require('async');
var request = require('request');
var xml2js = require('xml2js');

var app = express();
//babel ES/JSX compiler
require('babel-register');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');

//DB connect
mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

app.set('port', process.env.PORT || 8080);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * POST /api/characters
 * adds new character to database
 **/
app.post('/api/users', function(req, res) {
	
	var name = req.body.name;

  users.findOne({ users : users }, function(err, users) {
    if (err) return next(err);

    if (!users) {
      return res.status(404).send({ message: 'Character not found.' });
    }

    users.save(function(err) {
      if (err) return next(err);
      res.send({ message: users.name + 'All Signup Up! We will keep you posted on the v2 public launch!' });
    });
  });
});
	

//MIDDLEWARE
app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

/**
 *  * Socket.io stuff.
 *   */
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
  onlineUsers++;

  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });
});


server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
