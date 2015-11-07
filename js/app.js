var app = angular.module('app', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http) {

  $http.get('http://198.199.106.220/reports/')
    .then(function(data) {
      console.log(data);
      $scope.list = data;
    })
}])
