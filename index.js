const { Database } = require('beta.db')
const setting = new Database('./data/config.json')
const language = new Database('./lang/config.json')

var telegram = setting.get('telegram')
var dis = setting.get('discord')
var langconfig = setting.get('general')


const { Telegraf } = require('telegraf')
const bot = new Telegraf(telegram.token)
bot.launch()

const { Client } = require('discord.js')
const client = new Client()
client.login(dis.token)

// TELEGRAM
bot.start((ctx) => ctx.reply(''))
bot.help((ctx) => ctx.reply(''))


bot.on('text', (ctx) => {
    const message = ctx.message.text
    const author = ctx.message.from.id || ctx.message.from.username

    if (message && author === '566753238' || 'hadiazt') {
        console.log(message);
    }
})
