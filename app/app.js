'use strict';

// Declare app level module which depends on views, and components
angular.module('green', [
  'ngRoute',
  'listView',
  'green.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
