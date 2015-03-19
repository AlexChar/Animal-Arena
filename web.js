'use strict';

var express = require('express');
var gzippo = require('gzippo');
var app = express();

app.use(gzippo.staticGzip('dist'));
app.listen(5000);