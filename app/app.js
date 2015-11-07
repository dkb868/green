'use strict';

// Declare app level module which depends on views, and components
angular.module('green', [
  'ngRoute',
  'reportsView'
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
