'use strict';

angular.module('reportsView', ['ngRoute', 'esri.map', 'flash'])

.controller('listController', ["$scope", "$http", function($scope, $http) {
  $http.get('http://198.199.106.220/reports/')
    .then(function(data) {
      console.log(data);
      $scope.list = data;
    })
}])

.controller('formController', ['$scope', '$http', 'Flash', function($scope, $http, Flash) {

  $scope.reportData = {
    subject: '',
    description: '',
    category: ''
  };

  $scope.map = {
    center: {
      lng: -121.747,
      lat: 37.669
    },
    zoom: 8,
    loaded: false
  };

  $scope.onMapLoad = function(map) {
    $scope.map.loaded = true;

    require([
      'esri/layers/FeatureLayer',
      'esri/graphic',
      'esri/symbols/SimpleMarkerSymbol',
      'esri/Color',
      'esri/tasks/QueryTask',
      'esri/tasks/query'
    ], function(FeatureLayer, Graphic, SimpleMarkerSymbol, Color, QueryTask, Query) {
      var reportLayer = new FeatureLayer('http://services5.arcgis.com/pD3indDyL3BSXr6X/arcgis/rest/services/Environmental_Issue_Tracker/FeatureServer/0', {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ['*'],
        id: 'reportLayer'
      });

      map.addLayers([reportLayer]);

      $scope.postReport = function() {

        console.log($scope.reportData.subject);

        var esriReportAttributes = {
          subject: $scope.reportData.subject,
          description: $scope.reportData.description,
          category: $scope.reportData.category
        }

        var reportGraphic = new Graphic(event.mapPoint, new SimpleMarkerSymbol(new Color('red')), esriReportAttributes);

        if (!$scope.reportData.subject.length
            || !$scope.reportData.description.length
            || !$scope.reportData.category.length) {

          Flash.create('danger', 'Looks like you left some form fields blank!', 'flash-message');
        } else {
          Flash.create('success', 'Report created!', 'flash-message');
          reportLayer.applyEdits([reportGraphic]);

          var reportAttributes = {
            title: esriReportAttributes.subject,
            description: esriReportAttributes.description,
            latitude: event.mapPoint.getLatitude(),
            longitude: event.mapPoint.getLongitude(),
            category: esriReportAttributes.category
          }

          $http.post('http://198.199.106.220/reports/', reportAttributes)
            .then(function(response) {
              console.log(response);
            }, function(response) {
              console.log('Request failed!');
              console.log(response.data);
            });
        }
      }
    });
  }
}]);
