'use strict'
import * as http from "http";
import * as socketIo from 'socket.io-client';
import * as app from '../src/index';
import * as chai from 'chai';
import {Config} from "../config";

app;

const ioOptions = {
    transports: ['websocket'],
    forceNew: true,
    reconnection: false
};

let testMsg = 'HelloWorld',
    sender,
    receiver;

describe('Chat Events', () => {
    beforeEach((done) => {

        // connect two io clients
        sender = socketIo(`http://localhost:${Config.port}/`, ioOptions);
        receiver = socketIo(`http://localhost:${Config.port}/`, ioOptions);

        // finish beforeEach setup
        done()
    });

    afterEach((done) => {

        // disconnect io clients after each test
        sender.disconnect();
        receiver.disconnect();
        done();
    });

    describe('Message Events', () => {
        it('Clients should receive a message when the `message` event is emited.', (done) => {
            sender.emit('message', testMsg)
            receiver.on('message', function(msg){
                chai.expect(msg).to.equal(testMsg);
                done();
            })
        })
    });

    // describe('Move it', function(){
    //   it('On receive message with title move,', function(done){
    //     done();
    //   })
    // })
});