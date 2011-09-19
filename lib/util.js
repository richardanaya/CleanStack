var express = require('express');
var mustache = require('mustache');

var tmpl = {
    compile: function (source, options) {
        if (typeof source == 'string') {
            return function(options) {
                options.locals = options.locals || {};
                options.partials = options.partials || {};
                if (options.body) // for express.js > v1.0
                    locals.body = options.body;
                return mustache.to_html(
                    source, options.locals, options.partials);
            };
        } else {
            return source;
        }
    },
    render: function (template, options) {
        template = this.compile(template, options);
        return template(options);
    }
};


var configureServer = function() {
    var server = express.createServer();

    server.configure(
        function() {
            server.use(express.static(__dirname + '/../static/'));
            server.set("views", __dirname+'/../');
            server.set("view options", {layout: false});
            server.register(".html", tmpl);
        }
    );
    return server;
};

exports.configureServer = configureServer;


