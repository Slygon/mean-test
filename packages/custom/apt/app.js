'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Apt = new Module('apt');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Apt.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Apt.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Apt.menus.add({
    title: 'Apartment',
    link: 'apts',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  //We are adding a link to the main menu for all authenticated users
  Apt.menus.add({
    title: 'Manage Bill-mate',
    link: 'manage bill mate',
    roles: ['authenticated', 'admin'],
    menu: 'main'
  });
  
  
  
  Apt.aggregateAsset('css', 'apt.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Apt.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Apt.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Apt.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Apt;
});
