'use strict';

angular.module('landingView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/landing', {
    templateUrl: 'landing/landing.html',
    controller: 'landingController'
  });
}])

.controller('landingController', ['$scope', '$http', function($scope, $http) {

}])
