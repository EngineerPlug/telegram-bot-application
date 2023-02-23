const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TOKEN;
//const bot = new TelegramBot(dummy, {polling: true});
const bot = new TelegramBot(token, {polling: true});
bot.on('message', (message) => {
    let chat_id = message.from.id;
    let alias = message.from.first_name;
    bot.sendMessage(chat_id, 'Hello ' + alias + ', how are you doing today?');
    //console.log(message);
});

function stopProfaneText() {
    const profanity = ['bitch', 'shit', 'ho', 'hoe', 'dumb', 'stupid', 'ass', 'fuck', 'asshole', 'gay', 'faggot'];
    let chat_id = message.from.id;
    bot.addListener('message', (message) => {
        if (message === profanity.length) {
            bot.deleteMessage(chat_id, message);
            bot.sendMessage(chat_id, 'Please do not use profane language.');
        }
    })
}

bot.onReplyToMessage('message', (message) => {
    let chat_id = message.from.id;
    let alias = message.from.username;
});