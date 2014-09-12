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
      camera.position.z = 100;
      
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
    
    this.drawGraph = function(data) {
      
    };
    
    function createLine(length) {
      
      var material = new THREE.LineBasicMaterial({
        color: 0x0000ff,
        linewidth: 5
      });
      
      var geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(length,0,0));
      geometry.vertices.push(new THREE.Vector3(-length,0,0));
      
      var line = new THREE.Line(geometry, material);
      
      return line;
    };
  
    function calcVisHeight( dist ) {
      var vFOV = camera.fov * Math.PI / 180;
      var height = 2 * Math.tan(vFOV/2) * dist;
      return height;
    };
  
    function calcVisWidth(dist) {
      var height = calcVisHeight(dist);
      var aspect = renderer.domElement.clientWidth / renderer.domElement.clientHeight;
      var width = height * aspect;
      return width;
    }; 
  
  });
