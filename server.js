const net = require('net');
const ChatRoom = require('./chatRoom');


const server = net.createServer(client => {
    const chatRoom = new ChatRoom();
    client.setEncoding('utf-8');
    chatRoom.add('client');
    client.on('data', message => {
        chatRoom.chat(client, message);
    });
    client.on('close', () => {
        chatRoom.leaveChatRoom(client);
    });
});

module.exports = server;