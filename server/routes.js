'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');

var React = require('react');
var Router = require('react-router');
var clientSideRoutes = require('../src/routes.jsx');

router.get('/*', function(req, res, next) {
  Router.run(clientSideRoutes, req.url, function(Handler, state) {
      var markup = React.renderToString(<Handler/>);
      res.render(path.resolve(__dirname, 'views/markup.ejs'), {
        layout: 'layout',
        markup: markup,
        env: req.app.get('env')
      });
  });
});

/* if no route matched, redirect home */
// router.get('/*', function(req, res, next) {
//   res.redirect('/');
// });

module.exports = router;