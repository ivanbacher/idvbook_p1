'use strict';

angular.module('p1App')
  .controller('MainCtrl', function ($scope, $http, dataset) {
    
    $scope.dataset = [];
  
  
    $http.get('/api/data').success(function(data) {
      
      dataset.init(data);
      $scope.dataset = dataset.getData();
      console.log($scope.dataset);
      
    });
  
    

  });
