var util = require('./lib/util');

var port = process.env.PORT || 9999;
var server = util.configureServer();

server.get('/favicon.ico',
    function(req, res) {
        res.redirect('/images/favicon.ico');
    }
);

server.get(/^.*$/,
    function(req, res) {
        res.render("index.html", {
            locals: {
                name: "Richard"
            }
        });
    }
);

server.listen(port);
