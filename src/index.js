const Telegraf = require('telegraf');
const secret = require('dotenv');
const time = require('node-cron');
const config = secret.config();
const bot = new Telegraf(process.env.TOKEN);

//These are measuring time for sheduled messages
time.schedule('* 30 8 * * *', () => {
    bot.telegram.sendMessage(chat_id, 'Good Morning');
});


//server test
console.log('Your server is running on port 3000.');

//These instructions execute whenever there is a new member in the chat
bot.on('new_chat_members', (ctx) => {
    //console.log(ctx);
    let startMessage = 'Hello ' + ctx.message.new_chat_member["first_name"] + ', welcome to the Social Media Engagment Hub, it was made for social media engagement, and support. Please click rule number 2 in order to follow administrators. Please accept or deny the rules, if you select to deny, you will be removed, thanks.';
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "Business Support Hub Rules", callback_data: "rules"}
                ],
                [
                    {text: "1. Share all your social media links!", callback_data: "share links"}
                ],
                [
                    {text: "2. Follow all participants!", callback_data: "follow"}
                ],
                [
                    {text: "3. Engage on all social media platforms!", callback_data: "engage"}
                ],
                [
                    {text: "4. Watch your social media audience grow!", callback_data: "audience grow"}
                ],
                [
                    {text: "Accept", callback_data: "accept"},
                    {text: "Deny", callback_data: "deny"}

                ]
            ]
        }
    })
})

// The bot will start and give some simple instructions
bot.command('start', ctx => {
let startMessage = 'Welcome ' + ctx.from.first_name + ', this group was made for social media engagement, and support. Please click number 2 in order to follow administrators. Please accept or deny the rules, if you select to deny, you will be removed, thanks.';
bot.telegram.sendMessage(ctx.chat.id, startMessage, 
        {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "Business Support Hub Rules", callback_data: "rules"}
                ],
                [
                    {text: "1. Share all your social media links!", callback_data: "share links"}
                ],
                [
                    {text: "2. Follow all participants!", callback_data: "follow"}
                ],
                [
                    {text: "3. Engage on all social media platforms!", callback_data: "engage"}
                ],
                [
                    {text: "4. Watch your social media audience grow!", callback_data: "audience grow"}
                ],
                [
                    {text: "Accept", callback_data: "accept"},
                    {text: "Deny", callback_data: "deny"}

                ]
            ]
        }
    })
    console.log(ctx.chat);
    console.log(ctx.from.id);
    });
        // The user will accept or deny the rules, they will be removed if they select to deny
    bot.action('accept', ctx => {
    ctx.answerCbQuery();
    ctx.reply('Thanks for accepting our rules ' + ctx.from.first_name + '! We hope that you find this group helpful!');
    });

    bot.action('deny', ctx => {
    ctx.answerCbQuery();
    ctx.kickChatMember(ctx.from.id);
    });
        //  These instructions are meant to share the admin social media links
    bot.action('follow', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, 'Follow Now!',
            {
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: "Huegirls Twitter", callback_data: "huegirls twitter"}
                    ],
                    [
                        {text: "Huegirls FB", callback_data: "huegirls FB"}
                    ],
                    [
                        {text: "Huegirls IG", callback_data: "huegirls IG"}
                    ],
                    [
                        {text: "Jalloh Web Construction Twitter", callback_data: "twitter"}
                    ],
                    [
                        {text: "Jalloh Web Construction FB", callback_data: "facebook"}
                    ],
                    [
                        {text: "Geedo on IG", callback_data: "geedo IG"}
                    ],
                    [
                        {text: "Little Songhai Twitter", callback_data: "pan african coffee twitter"}
                    ],
                    [
                        {text: "Little Songhai FB", callback_data: "pan african FB"}
                    ]
                ]
        }
    });
});

// callback queries answered and bot sends social media links
bot.action('huegirls twitter', ctx => {
ctx.answerCbQuery();
ctx.reply('https://twitter.com/HUEGIRLSZ');
});

bot.action('huegirls FB', ctx => {
ctx.answerCbQuery();
ctx.reply('https://www.facebook.com/HU3GIRLSZ');
});

bot.action('huegirls IG', ctx => {
ctx.answerCbQuery();
ctx.reply('https://www.instagram.com/hu3girlsz/');
});

bot.action('twitter', ctx => {
ctx.answerCbQuery();
ctx.reply('https://twitter.com/JallohWebDevs');
});

bot.action('facebook', ctx => {
ctx.answerCbQuery();
ctx.reply('https://www.facebook.com/DeveloperPlug/');
});

bot.action('pan african coffee twitter', ctx => {
ctx.answerCbQuery();
ctx.reply('https://twitter.com/Little_Songhai');
})

bot.action('geedo IG', ctx => {
ctx.answerCbQuery();
ctx.reply('https://www.instagram.com/jalloh_dev/');
});

bot.action('pan african FB', ctx => {
ctx.answerCbQuery();
ctx.reply('https://www.facebook.com/MobileAfricanCoffee');
});

//bot hears profanity and will delete the message then give a warning
bot.hears([
'Fuck', 'fuck', 'Bitch', 'bitch', 'Ass', 'ass', 'Dam', 'dam', 'Asshole', 'asshole',
'shit', 'Ho', 'hoe', 'Hoe', 'ho', 'Slut', 'slut', 'Faggot', 'faggot', 'dick'
],  ctx => {
ctx.reply('Please do not use profanity in this group.');
ctx.deleteMessage();
});
bot.command('info', ctx => {
bot.telegram.sendMessage(ctx.chat.id, 'Info', {
reply_markup: {
inline_keyboard: [
                    [
{text: "I need skin care!", callback_data: "skin"},
{text: "I need a bot!", callback_data: "bot"},
{text: "I need a website!", callback_data: "website"}
                    ]
                ]
            }
        })
    });

    /*
    bot.action('skin', ctx => {
        bot.answerCbQuery();
        bot.reply('Learn how you can heal your skin by clicking: https://huegirlszz.com');
    });
    bot.action('bot', ctx => {
        bot.answerCbQuery();
        bot.reply('Get your telegram or discord bot project started by clicking https://jallohwebconstruction.com and filling out the form at the bottom to setup your consultation!');
    });
    bot.action('website', ctx => {
        bot.answerCbQuery();
        bot.reply('If you are ready build your fully custom shopify or wordpress website click https://jallohwebconstruction.com and go to our products to find what you need or fill out the form at the bottom!')
    });
    */
bot.launch();