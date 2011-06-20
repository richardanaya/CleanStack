var express = require('express');
var model = require('./model');
var util = require('./lib/util');

var app = express.createServer();

app.configure( 
    function() {
	app.use(express.static(__dirname + '/root/'));
    }
);

app.get(/^.*$/, 
    function(req, res) {
	util.render(res,'index.html', {name:'Richard'});
    }
);

app.listen(9999);
