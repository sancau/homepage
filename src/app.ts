'use strict';

import * as express from 'express'

var app = express().set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.get('/', (req: express.Request, res: express.Response) => res.render('index', {title: 'Index'}));
app.get('/about', (req: express.Request, res: express.Response) => res.render('about', {title: 'About'}));

var server = app.listen(3000, () => console.log('Up on 3000..'));

