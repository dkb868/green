'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'listController'
  });
}])

.controller('listController', ["$scope", "$http", function($scope, $http) {
  $http.get('http://198.199.106.220/reports/')
    .then(function(data) {
      console.log(data);
      $scope.list = data;
    })
}]);
