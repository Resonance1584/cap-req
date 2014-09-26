/*jshint node:true*/
'use strict';

var express = require('express');

var app = express();

var port = process.env.PORT || 3999;

app.use (function(req, res, next) {
    var data='';
    req.setEncoding('utf8');
    req.on('data', function(chunk) { 
       data += chunk;
    });

    req.on('end', function() {
        req.body = data;
        next();
    });
});

app.all('/*', function (req, res) {
  console.log('\n');
  console.log((new Date()).toISOString());
  console.log('\n');
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);
  console.log(req.body);
  res.status(200).end();
  console.log('\n');
  console.log('---');

});

app.listen(port, function () {
  console.log('Listening on port %d', port);
});
