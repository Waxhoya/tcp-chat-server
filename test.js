const assert = require('chai').assert
const fs = require('fs');
const chatRoom = require('./chatRoom');

class Tester {
    write(text) {
        this.recieved = text;
    }
};

const testUser1 = new Tester;

describe ('Chat function check', () => {
    it('Chat client connects to server', () => {
        chatRoom.add(testUser1);
        assert.equal('client 1', chatRoom.clients[0].name, "client 1 matches client[1]");
        chatRoom.add(testUser2);
        let connectedUsers = ChatRoom.clients.map(function(liveClient){
            return liveClient.name;
        });
        assert.sameMembers(['Client 1','Client 2'], clientNames, 'Confirmed array match');
    });

    