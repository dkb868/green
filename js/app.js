var app = angular.modules('app', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http) {

  $http.get('localhost:8080/reports')
    .then(function(data) {
      console.log(data);
      $scope.list = data;
    })
}])
