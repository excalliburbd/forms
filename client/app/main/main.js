'use strict';

angular.module('formsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/default',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
