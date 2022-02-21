const { Database } = require('beta.db')
const setting = new Database('./data/config.json')

var TL_token = setting.get('tltoken');
var DIS_token = setting.get('distoken');
var LANG = setting.get('general').lang; // KR / EN / IR
var CHANNEL = setting.get('general').DiscordChannelID

const { Telegraf } = require('telegraf')
const bot = new Telegraf(TL_token)
bot.launch()

const { Client } = require('discord.js')
const client = new Client()
client.login(DIS_token)

bot.start((ctx) => ctx.reply(setting.get('general').start))
bot.help((ctx) => ctx.reply(setting.get('general').help))

bot.on('message', (ctx) => {

    const message = ctx.update.message.text;
    const authorID = ctx.update.message.from.id;
    const authorUSERNAME = ctx.update.message.from.username;
    const photo = ctx.update.message.photo[ctx.update.message.photo.length - 1].file_id;

    if (!LANG) {
        ctx.reply(setting.get('general').langerr)
        if (!DiscordChannelID) {
            ctx.reply(setting.get('general').langerr)
        } else {
            if (message && photo) {
                if (LANG === 'KR') {

                    client.channels.cache.get(CHANNEL).send()
                } else if (LANG === 'EN') {

                    client.channels.cache.get(CHANNEL).send()
                } else if (LANG === 'IR') {

                    client.channels.cache.get(CHANNEL).send()
                }
            }
        }
    } else {
        ctx.reply(setting.get('general').langerr)
    }
})