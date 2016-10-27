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
        assert.equal('User 1', chatRoom.clients[0].name, "client 1 matches client[1]");
        chatRoom.add(testUser2);
        let connectedUsers = chatRoom.clients.map(function(liveClient){
            return liveClient.name;
        });
        assert.sameMembers(['User 1','User 2'], connectedUsers, 'Confirmed array match');
    });

    it('Checks that messages are sent', () => {

        chatRoom.chat(testUser1, 'Im a test!');
        assert.equal(testUser2.recieved, 'User 1: Im a test!');
        assert.equal(testUser1.recieved, 'User 2: entered the room');   
    });

    it('Users can exit the chatRoom', () => {
        console.log('mocha tries: ', testUser2);
        console.log(chatRoom.clients);
        chatRoom.leaveChatRoom(testUser2);
        assert.fail(chatRoom.chat(testUser2, 'Now Im a test!'));
    });

    it('Can Pass the Bechdel test', => {

    });
});