'use strict';

angular.module('listView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'reports/list.html',
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
