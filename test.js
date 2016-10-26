const assert = require('chai').assert
const fs = require('fs');
const ChatRoom = require('./chatRoom');

class Tester {
    write(text) {
        this.recieved = text;
    }
};

const chatRoom = new ChatRoom();
const testUser1 = new Tester;
const testUser2 = new Tester;

describe ('Chat function check', () => {
    it('Chat client connects to server', () => {
        chatRoom.add(testUser1);
        console.log('user 1 added');
        console.log(chatRoom.clients[0].name);
        assert.equal('User 1', chatRoom.clients[0].name, "client 1 matches client[1]");
        chatRoom.add(testUser2);
        let connectedUsers = chatRoom.clients.map(function(liveClient){
            return liveClient.name;
        });
        assert.sameMembers(['User 1','User 2'], connectedUsers, 'Confirmed array match');
    });
});
