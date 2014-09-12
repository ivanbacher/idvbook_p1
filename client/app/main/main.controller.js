'use strict';

angular.module('p1App')
  .controller('MainCtrl', function ($scope, $http, threejsService, datasetService) {

    datasetService.getData().then(function(){
      console.log("adasasd");
    });

  });
