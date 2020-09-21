const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config/config.json');
const l1 = require('./config/namaListing.json');
const l2 = require('./config/uriLising.json');


bot.on('ready', () => {
	console.log("The bot is active and ready to go!");
	setInterval(() => {
		const nameActivities = Math.floor(Math.random() * (l1.activities_list.length - 1) + 1);
		const urlActivities = Math.floor(Math.random() * (l2.urlList.length - 1) + 1);
		bot.user.setActivity(l1.activities_list[nameActivities], {url: l2.urlList[urlActivities] });
    }, config.streamDely); // Runs this every 10 seconds.
});
 
 
bot.login(config.token);