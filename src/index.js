const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (message) => {
    let chat_id = message.from.id;
    let alias = message.from.first_name;
    bot.sendMessage(chat_id, 'Hello ' + alias + ', how are you doing today?');
});