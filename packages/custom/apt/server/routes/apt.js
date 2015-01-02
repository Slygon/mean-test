'use strict';

// The Package is past automatically as first parameter
module.exports = function(Apt, app, auth, database) {

  app.get('/apt/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/apt/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/apt/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/apt/example/render', function(req, res, next) {
    Apt.render('index', {
      package: 'apt'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
