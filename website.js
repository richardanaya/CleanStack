var express = require('express');
var model = require('./model');
var util = require('./lib/util');

var server = express.createServer();

server.configure( 
    function() {
	server.use(express.static(__dirname + '/root/'));
    }
);

server.get(/^.*$/, 
    function(req, res) {
	util.render(res,'index.html', {name:'Richard'});
    }
);

server.listen(9999);
