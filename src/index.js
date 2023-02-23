const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => {
    ctx.reply('Hello, you have entered our new group!');
})
bot.launch();