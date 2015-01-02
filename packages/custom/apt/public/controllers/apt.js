'use strict';

angular.module('mean.apt').controller('AptController', ['$scope', 'Global', 'Apt',
  function($scope, Global, Apt) {
    $scope.global = Global;
    $scope.package = {
      name: 'apt'
    };
  }
]);
