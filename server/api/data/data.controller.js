'use strict';

var _ = require('lodash');
var fs = require('fs');

// Get list of things
exports.index = function(req, res) {
    		
  fs.readFile('./server/data/04carsdata.csv', 'utf8', function(err,data) {

    if(err) {
      console.log(err);
    }

    //split file into arry by \n
    var response = [];
    var list = data.split('\n');
    var headers = list[0].split(',');

    for(var i = 1; i < list.length; i++) {
      
      var currentRow = list[i].split(',');
      var element = {};
      
      for(var j = 0; j < currentRow.length; j++) {
        
        element[headers[j]] = currentRow[j]
      }
      
      response.push( element );
    }
    
    res.json(response);

  });
};