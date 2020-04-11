const Discord = require('discord.js')
const client = new Discord.Client();

client.login("Njk4NDgxMTMwODE0MzA4Mzgz.XpGdXQ.vqGZddmwQzqgwfQfzsnwmlVdt4c")

var prefix = (">");

client.on("message", (message) => {

    if(message.content === ">aide")
        message.channel.send("Ma commande d’aide est >help, execute la dans #commande-bot") 
    
  });



