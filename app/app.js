'use strict';

// Declare app level module which depends on views, and components
angular.module('green', [
  'ngRoute',
  'reportsView',
  'landingView'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'reports/list.html',
    controller: 'mapController'
  }).when('/form', {
    templateUrl: 'reports/form.html',
    controller: 'formController'
  }).when('/landing', {
    templateUrl: 'landing/landing.html',
    controller: 'landingController'
  })
  .otherwise({
    redirectTo: '/landing'
  });

}]);
