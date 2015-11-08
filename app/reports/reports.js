'use strict';

angular.module('reportsView', ['ngRoute'])

.controller('listController', ["$scope", "$http", function($scope, $http) {
  $http.get('http://198.199.106.220/reports/')
    .then(function(data) {
      console.log(data);
      $scope.list = data;
    })
}])

.controller('formController', ["$scope", function($scope) {
  require([
    "esri/map", "esri/layers/FeatureLayer",
    "esri/tasks/query", "esri/geometry/Circle",
    "esri/graphic", "esri/InfoTemplate", "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/SimpleLineSymbol", "esri/symbols/SimpleFillSymbol", "esri/renderers/SimpleRenderer",
    "esri/config", "esri/Color", "dojo/dom-attr", "dojo/dom", "dojo/domReady!"
  ], function(
    Map, FeatureLayer,
    Query, Circle,
    Graphic, InfoTemplate, SimpleMarkerSymbol,
    SimpleLineSymbol, SimpleFillSymbol, SimpleRenderer,
    esriConfig, Color, domAttr, dom
  ) {
    esriConfig.defaults.io.proxyUrl = "/proxy/";
    $scope.map = new Map("map", {
      basemap: "topo", //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
      center: [-122.45, 37.75], // longitude, latitude
      zoom: 13
    });
    var circleSymb = new SimpleFillSymbol(
      SimpleFillSymbol.STYLE_NULL,
      new SimpleLineSymbol(
        SimpleLineSymbol.STYLE_SHORTDASHDOTDOT,
        new Color([105, 105, 105]),
        2
      ), new Color([255, 255, 0, 0.25])
    );
    var circle;
    $scope.map.on("click", function(evt) {
      // GET LAT LONG HERE
      console.log("x: " + evt.mapPoint.x + " y: " + evt.mapPoint.y);
      circle = new Circle({
        center: evt.mapPoint,
        geodesic: true,
        radius: 0.1,
        radiusUnit: "esriMiles"
      });
      $scope.map.graphics.clear();
      $scope.map.infoWindow.hide();
      var graphic = new Graphic(circle, circleSymb);
      $scope.map.graphics.add(graphic);
      domAttr.set("latitude", "value", evt.mapPoint.y);
      console.log(domAttr.get("latitude", "value"));
      domAttr.set("longitude", "value", evt.mapPoint.x);
      console.log(domAttr.get("longitude", "value"));
    })
  });

}]);
