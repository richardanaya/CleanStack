var express = require('express');
var model = require('./model');
var util = require('./lib/util');

var port = process.env.PORT || 3000;
var server = express.createServer();

server.configure( 
    function() {
	server.use(express.static(__dirname + '/root/'));
    }
);

server.get('/favicon.ico',
    function(req, res) {
        res.redirect('/images/favicon.ico');
    }
);

server.get(/^.*$/, 
    function(req, res) {
	res.redirect('/index.html');
    }
);

server.listen(port);
