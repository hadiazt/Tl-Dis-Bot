const { Database } = require('beta.db')
const setting = new Database('./data/config.json')

var TL_token = setting.get('tltoken');
var DIS_token = setting.get('distoken');
var LANG = setting.get('general').lang; // KR / EN / IR
var CHANNEL = setting.get('general').DiscordChannelID

const { Telegraf } = require('telegraf')
const bot = new Telegraf(TL_token)
bot.launch()

const { Client, MessageEmbed } = require('discord.js')
const client = new Client()
client.login(DIS_token)

bot.start((ctx) => ctx.reply(setting.get('general').start))
bot.help((ctx) => ctx.reply(setting.get('general').help))

bot.on('message', (ctx) => {

    const message = ctx.update.message.text;
    const authorID = ctx.update.message.from.id;
    const authorUSERNAME = ctx.update.message.from.username;

    if (message) {
        if (!LANG) {
            return ctx.reply(setting.get('general').langerr);
        } else {
            if (!DiscordChannelID) {
                if (LANG === 'KR') {
                    return ctx.reply()
                } else if (LANG === 'EN') {
                    return ctx.reply()
                } else if (LANG === 'IR') {
                    return ctx.reply()
                }
            } else {
                var EMBEDMSG = new MessageEmbed()
                    .setTimestamp()
                if (LANG === 'KR') {

                    client.channels.cache.get(CHANNEL).send(EMBEDMSG)
                } else if (LANG === 'EN') {

                    client.channels.cache.get(CHANNEL).send(EMBEDMSG)
                } else if (LANG === 'IR') {

                    client.channels.cache.get(CHANNEL).send(EMBEDMSG)
                }
            }
        }
    }
})