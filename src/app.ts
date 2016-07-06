'use strict';

import * as express from "express";

var app = express();

app.get('/', function(req:express.Request, res:express.Response){
  res.send(`<h1>Test App</h1>`);
});

app.listen(3000, function(){
  console.log('Test app is listening on port 3000...');
});

/////////////////////////////////////////////////////////////////

var anotherApp = express();

anotherApp
.get(
  '/', 
  (req: express.Request, res: express.Response) =>
   res.send('Hello World!')
);

let port = 3140
anotherApp.listen(port, () => 
  console.log(`Another app is listening on port ${port}...`));