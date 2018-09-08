'use strict'
var chai = require('chai'),
    expect = chai.expect,
    server = require('../index').server,
    mongoose = require('mongoose'),
    User = require('../schemas/User');

describe('Models Events', function(){
  it('Should validate user model creation logic', function(done){
    var user = new User();
    user.validate(function(err){
      expect(user.errors.username).to.exist;
      done();
    });
    user = new User({username: 'test'});
    user.validate(function(err){
      expect(user.errors).not.exist;
      expect(user.point).to.have.lengthOf(3); // check default point placement
      done();
    })
  });
});
