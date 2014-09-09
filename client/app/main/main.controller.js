'use strict';

angular.module('p1App')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.data = [];

    $http.get('/api/data').success(function(data) {
      $scope.data = data;
    });

  });
