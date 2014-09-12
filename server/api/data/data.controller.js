'use strict';

var _ = require('lodash');
var fs = require('fs');

// Get list of things
exports.index = function(req, res) {
    		
  fs.readFile('./server/data/04carsdata.csv', 'utf8', function(err,data) {

    if(err) {
      console.log(err);
    } else {
      
      var response = {
        headers:[],
        records:[]
      };
     
      var list = data.split('\n');
      response.headers = list[0].split(',');

      for(var i = 1; i < list.length; i++) {

        var currentRow = list[i].split(',');
        var element = {};

        for(var j = 0; j < currentRow.length; j++) {
           
          element[response.headers[j]] = currentRow[j]
        }

        response.records.push( element );
      }

      res.json(response);
    }
  });
};