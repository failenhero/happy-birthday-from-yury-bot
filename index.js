const { Telegraf, Markup } = require('telegraf');
const messages = require('./messages-scripts');

require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply(
        messages.welcome(ctx.message.from.first_name ? ctx.message.from.first_name : 'дружище'),
        Markup.inlineKeyboard(
            [
                [Markup.button.callback('Выслушать поздравления', 'btn_congrats')],
                [Markup.button.callback('Получить открытку', 'btn_card')],
                [Markup.button.callback('Порция мотивации', 'btn_kick')],
            ]
        )
    )
});

bot.help((ctx) => ctx.reply(messages.help));
bot.command('congrats', (ctx) => ctx.reply(messages.congrats));
bot.command('kick', (ctx) => ctx.reply(messages.kick));
bot.command('card', (ctx) => ctx.replyWithPhoto({source: './images/birthdayCard.jpg'}))
bot.hears('Привет', (ctx) => ctx.reply(messages.replyToHi));

function addActionBot(name, text = null, src = null) {
    bot.action(name, async (ctx) => {
        try {
            await ctx.answerCbQuery;

            if (src) {
                await ctx.replyWithPhoto({
                    source: src
                })
            }

            if (text) {
                await ctx.reply(text);
            }
        } catch {
            ctx.reply(messages.commandError);
        }
    });
}

addActionBot('btn_congrats', messages.congrats);
addActionBot('btn_card', null, './images/birthdayCard.jpg');
addActionBot('btn_kick', messages.kick);

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));