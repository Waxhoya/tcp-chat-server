module.exports = class ChatRoom {
    constructor() {
        this.clientsInChat = 1;
        this.clients = [];
    }

    add(client){
        client.name = 'User ' + (this.clientsInChat++);
        this.clients.push(client);
        this.clients.forEach(user => {
            user.write(client.name + ": entered the room");
        });
    }

    chat(client, message){
        this.clients.forEach(cli => {
            if(cli === client) return;
            cli.write(client.name + ': '+ message);
        });
    }

    leaveChatRoom(client){
        // console.log("For Each bugtrace", client)
        // console.log("TWO", this.client.indexOf(client));
        const index = this.clients.indexOf(client);
        if (index !== -1) this.clients.splice(index, 1);
        this.clients.forEach(cli => {
            if (cli == client) return;
            cli.write('User: '+client.name+' has left the room');
        });
    }

};