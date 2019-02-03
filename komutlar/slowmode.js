const Discord = require('discord.js');

exports.run = async(client, message, args) => {
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.RichEmbed()
                .setDescription(`DoÄŸru kullanÄ±m: \`cb!yavaÅŸ-mod [0/10]\``)
                .setColor('RANDOM')
                .setTimestamp()
            message.channel.send({embed})
            return
          }
if (limit > 10) {
    return message.channel.sendEmbed(new Discord.RichEmbed().setDescription("SÃ¼re limiti maksimum **10** saniye olabilir.").setColor('RANDOM'));
}
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Yazma sÃ¼re limiti **${limit}** saniye olarak ayarlanmÄ±ÅŸtÄ±r.`).setColor('RANDOM'));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaÅŸmod'],
  permLevel: 3,
};

exports.help = {
  name: 'yavaÅŸ-mod',
  description: 'Sohbete yazma sÄ±nÄ±r (sÃ¼re) ekler.',
  usage: 'yavaÅŸ-mod [1/10]',
};