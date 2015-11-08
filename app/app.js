'use strict';

// Declare app level module which depends on views, and components
angular.module('green', [
  'ngRoute',
  'reportsView',
  'landingView',
  'eventsView'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'reports/list.html',
    controller: 'listController'
  }).when('/form', {
    templateUrl: 'reports/form.html',
    controller: 'formController'
  }).when('/landing', {
    templateUrl: 'landing/landing.html',
    controller: 'landingController'
  }).when('/event', {
    templateUrl: 'events/create.html',
    controller: 'eventsController'
    }).when('/join',{
    templateUrl: 'events/join.html',
    controller: 'joinController'
    }).
    otherwise({
    redirectTo: '/landing'
  });

}]);
