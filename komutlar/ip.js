const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send({embed:ozelmesajuyari}); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
      .setTitle("İşte Fivem Ve Team Speak Sunucularımızın Ip'leri")
      .setAuthor("Star Roleplay", "https://images-ext-1.discordapp.net/external/o9DjkMh5ATz4XRn8Xq7DAhsncEpX9MRkg-z0n-cpjRo/https/i.gifer.com/OKEq.gif?width=631&height=473","https://yagami.xyz")
      .addField('Fivem','connect cfx.re/join/dyyp75')
      .addField('TS3','starroleplay')
      
      .setThumbnail("https://images-ext-1.discordapp.net/external/o9DjkMh5ATz4XRn8Xq7DAhsncEpX9MRkg-z0n-cpjRo/https/i.gifer.com/OKEq.gif?width=631&height=473")

    return message.channel.send({ embed:sunucubilgi });
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ip',
  description: 'Ambulansı arar (ciddiye almayın)',
  usage: 'ara112'
};
