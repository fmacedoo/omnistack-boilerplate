var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');

const cors = require('./shared/cors');
const database = require('./shared/database');
const routes = require('./routes/api');

const app = express();

app.all("/*", cors);
database();

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./shared/passport')(passport);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use Routes
app.use('/', routes.user);
app.use('/api/messages', routes.message);

module.exports = app;