'use strict'
var chai = require('chai'),
    expect = chai.expect,
    server = require('../index').server,
    mongoose = require('mongoose');


describe('DB Events', function(){
  it('Should connect to database', function(done){
    mongoose.connect('mongodb://localhost/test', done);
  });
});
