'use strict';

angular.module('p1App')
  .directive('threejsDirective', function ($window, threejsService) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        
        element.css('width', '100%');
        element.css('height', '100%');
        element.css('background', '#b2b2b2');
        element.css('display', 'block');
        
        threejsService.init( element );
        threejsService.animate();
        
        angular.element($window).bind('resize', function(event){
          
          console.log("resize");
        });
        
        
      }
    };
  });