var util = require('./lib/util');

var port = process.env.PORT || 9999;
var server = util.configureServer();

server.get('/favicon.ico',
    function (req, res) {
        res.redirect('/img/favicon.ico');
    }
);

server.get(/^.*$/,
    function (req, res) {
        res.render('index.jinjs', { name:"Richard" });
    }
);

server.listen(port);
