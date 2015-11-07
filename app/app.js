'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'reportsView',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'reports/list.html',
    controller: 'listController'
  }).when('/form', {
    templateUrl: 'reports/form.html',
    controller: 'formController'
  }).otherwise({
    redirectTo: '/list'
  });

}]);
