const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const devtr = new Discord.MessageEmbed()
  .setTitle("Discord Sunucumuzun Linki İçin Tıklayın") 
  .setColor("RANDOM") 
  .setURL('https://discord.gg/4jPzXabjPU') 
  message.channel.send(devtr);   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dc","discord"],
  permLevel: 0,
};

exports.help = {
  name: 'dc',
  description: 'arda',
  usage: 'site'
};