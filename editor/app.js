var express = require('express'),
    path = require('path'),
    os = require('os'),
    markdown = require('./routes/markdown'),
    http = require('http');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.resolve(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
    app.set('host', 'http://localhost');
}

app.get('*', markdown.handler);

http.createServer(app).listen(app.get('port'), function(){
    var h = (app.get('host') || os.hostname() || 'unknown') + ':' + app.get('port');
    console.log('Express server listening at ' + h);
});
