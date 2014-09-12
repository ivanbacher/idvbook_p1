'use strict';

angular.module('p1App')
  .service('datasetService', function ($http,$q) {
    
    var dataset;
    
    this.getData = function() {
      
      var defer = $q.defer();
      
      $http.get('/api/data').success(function(data) {
        
        dataset = data;
        defer.resolve();
      });
      
      return defer.promise;
    };
    
  });
