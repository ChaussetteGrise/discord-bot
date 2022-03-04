const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = ".";


const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("renvoie pong")
    .addUserOption(option => option.setName("utilisateur").setDescription("utilisateur que vous souhaitez mentionner").setRequired(false))


    Client.on("ready", () => {
    console.log("bot opérationel");
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;
    
    //.ping
    if(message.content === prefix + "ping"){
        message.reply("pong !")
    }

    //.quoi
    if(message.content === prefix + "quoi"){
        message.reply("feur !")
    }

});    
Client.login(process.env.TOKEN)