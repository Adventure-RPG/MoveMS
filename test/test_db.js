'use strict'
var expect = require('chai').expect,
    server = require('../index.js').server,
    mongoose = require('mongoose');


describe('DB Events', function(){
  before('Should connect to database', function(done){
    mongoose.connect('mongodb://localhost/test', done);
  });
});
