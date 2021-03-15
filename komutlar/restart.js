const Discord = require('discord.js');
exports.run = (client, message, args) => {
    return message.channel.send
    
    
    
    
    
    ("**Sunucumuza Az Sonra Restart Atılacaktır\nLütfen Güvenli Çıkış Sağlayın**\n*STAR ROLEPLAY YÖNETİM EKİBİ*  \n||@everyone|| & ||@here||")








};

;
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "2"
};

exports.help = {
  name: "restart",
  description: "restart komutu berk abi",
  usage: "restart"
};