'use strict';

angular.module('mean.apt').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('apts', {
      url: '/apt/example',
      templateUrl: 'apt/views/index.html'
    }).state('manage bill mate', {
      url: '',
      templateUrl: ''
    });
  }
]);
