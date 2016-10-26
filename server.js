const net = require('net');
const ChatRoom = require('./chatRoom');


const server = net.createServer(client => {

    client.setEncoding('utf-8');
    ChatRoom.add('client');
    client.on('data', message => {
        chatRoom.chat(client, message);
    });
    client.on('close', () => {
        ChatRoom.leaveChatRoom(client);
    });
});

module.exports = server;