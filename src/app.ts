'use strict';

import * as express from 'express'

interface RouteSetup {
  view: string;
  links: string[];
  page: {
    title: string;
    link: string;
  }
  content: {
    header: string;
    body: string;
  }
}

var routes: RouteSetup[] = []

var indexRoute: RouteSetup = {
  view: 'index',
  links: ['/about', '/'],
  page: {
    title: 'Index page',
    link: '/'
  },
  content: {
    header: 'This is index page',
    body: 'Index content'
  }
}

var aboutRoute: RouteSetup = {
  view: 'about',
  links: ['/about', '/'],
  page: {
    title: 'About',
    link: '/about'
  },
  content: {
    header: 'This is about page',
    body: 'Some freakin awesome content'
  }
}

routes.push(aboutRoute);
routes.push(indexRoute);

var app = express().set('view engine', 'jade');
    app.use(express.static(__dirname + '/public'));

routes.forEach(route => {
  app.get(route.page.link, function(req: express.Request, res: express.Response){
    res.render(route.view, route);    
  });
});

var server = app.listen(3000, () => console.log('Up on 3000..'));
