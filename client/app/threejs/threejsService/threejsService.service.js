'use strict';

angular.module('p1App')
  .service('threejsService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  
    var scene;
    var renderer;
    var stats;
    var camera;
    var frameId;
  
    this.init = function( container ) {
      
      var width = container.width();
      var height = container.height();
      

      camera = new THREE.PerspectiveCamera( 45, width/height, 1, 1000);
      
      scene = new THREE.Scene();
      
      
      renderer = new THREE.WebGLRenderer( {canvas:container[0], antialias:true, alpha:true} );
      renderer.setSize(width, height);      
      
      stats = new Stats();
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.left = '0px';
      stats.domElement.style.top = '0px';
      document.body.appendChild( stats.domElement );
    }
    
    this.animate = function() {
          
      render();
      
      function render() {
        
        frameId = requestAnimationFrame(render);
        
        renderer.render(scene,camera);
        
        if(stats) {
          stats.update();
        }
      }
    }
  
    this.stop = function() {
      
      cancelAnimationFrame(frameId);
    }
    
    this.onResize = function() {
      //todo
    }
  
  
  });
