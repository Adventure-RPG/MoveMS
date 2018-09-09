'use strict'
import * as mongoose from 'mongoose';
import {User, UserIF} from '../src/schemas/User'
import {expect} from 'chai';

describe('DB Events', () => {
  it('Should connect to database.', (done) => {
      mongoose.connect('mongodb://localhost/test', done);
  });
  it('Should validate user model creation logic', done => {
    let user:UserIF = new User();
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
