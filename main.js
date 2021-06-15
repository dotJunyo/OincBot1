const Discord = require('discord.js')
const fs = require('fs');
const Client = new Discord.Client({});
Client.oincker = require("./oincker.json");

const PREFIX = "!";

Client.on('ready', () => {
    console.log('Oinc!')
    Client.user.setActivity("lama em sí mesmo!");
})

Client.on('message', async(message) => {
    
    msg = message.content.toLowerCase();

    let args = msg.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case "oinc":
            var _messageNumber = Math.floor(Math.random() * 15)
            let _message = Client.oincker[_messageNumber];
            message.channel.send(_message);
            break;
        
        case "junyo":
            message.channel.send("JUNYO É O CARA MAIS LINDO QUE EU CONHEÇO! sz");
            break;
        case "vito":
            message.channel.send(";-;");
            break;
    }

    if(Math.random() < .0005){
            message.channel.send("Oinc! 🐷");
            Client.user.setActivity("SUPER OINC!!!!",{type: "WATCHING"});
        }
    
    if(Math.random() < .0025){
        Client.user.setActivity("lama em sí mesmo!");
        message.react("🐷");
    }
})

Client.login('NzUzNDY1ODA2ODUxMTQ1ODg5.X1mltw.NLG6Ll3V5nrKyxmCNk7AitntaX4');