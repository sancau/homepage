'use strict';

import * as express from "express";

var app = express();

var lyrics = 'ATATA'

app.get('/', function(req:express.Request, res:express.Response){
  res.send(`<h1>${lyrics}</h1>`);
});

app.listen(3000, function(){
  console.log('Listening on port 3000...');
});

