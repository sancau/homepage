'use strict';
import * as express from "express";

var app = express().disable('x-powered-by');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req: express.Request, res: express.Response){
  var data = {
    pageTitle: 'Index page',
    connections: server.connections
  }
  res.render('main', data);
});

var server = app.listen(3000, () => console.log('Listening on 3000..'));
