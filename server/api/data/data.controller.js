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
						var list = data.split('\n');
						 
						var headers = list[0].split(',');

						for(var i = 1; i < list.length; i++) {
								//list[i];
						}

		});
    
    res.json([
  {
  name : 'Ivan',
  info : 'Bla bla'
  } 
  ]);
};