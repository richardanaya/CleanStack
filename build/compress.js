var buildify = require('buildify');

buildify()
    .concat([
        '../public/libs/jquery/jquery.js',
        '../public/libs/bootstrap/js/bootstrap.js',
        '../public/libs/requirejs/require.js',
        '../public/app.min.js'
    ])
    .uglify({mangle: true})
    .save('../public/compiled/app.min.js');

buildify()
    .concat([
        '../public/libs/bootstrap/css/bootstrap.min.css',
        '../public/css/app.css'
    ])
    .cssmin()
    .save('../public/compiled/app.min.css');