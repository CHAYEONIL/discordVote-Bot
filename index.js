const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("봇이 켜졌슴당");
})

client.on("message", (message) => {
    if(message.content.substring(0,5) === "!시간조율") {
        
        const description = message.content.substring(5);

        const embed = new Discord.MessageEmbed()
        .setTitle("시간조율😊")
        .setDescription(description)
        .setColor("RED");

        message.channel.send(embed)
        .then((msg) => {
            msg.react("❤️")
            msg.react("🧡")
            msg.react("💛")
            msg.react("💚")
            msg.react("💙")
            msg.react("💜")
            msg.react("🤎")
        });

    }
})

client.login("본인 봇 주소");