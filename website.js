var express = require('express');
var model = require('./model');
var util = require('./lib/util');

model.connect('mongodb://user:password@abc.com:9999/Database');

var app = express.createServer();

app.configure( 
    function() {
	app.use(express.static(__dirname + '/root/'));
    }
);

app.get(/^.*$/, 
    function(req, res) {
	util.render(res,'index.html');
    }
);

app.listen(9999);
