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
            if (LANG === 'KR' || LANG === 'EN' || LANG === 'IR') {
                const lan = new Database(`./lang/${LANG}.json`)
                if (!CHANNEL) {
                    if (LANG === 'KR') {
                        return ctx.reply(lan.get('channelerr'))
                    } else if (LANG === 'EN') {
                        return ctx.reply(lan.get('channelerr'))
                    } else if (LANG === 'IR') {
                        return ctx.reply(lan.get('channelerr'))
                    }
                } else {
                    var EMBEDMSG = new MessageEmbed()
                        .setTimestamp()
                        .setColor('#16ad3f')
                    if (LANG === 'KR') {
                        EMBEDMSG.setTitle(lan.get('EMBED').TITLE + authorUSERNAME + " | " + authorID)
                        EMBEDMSG.setDescription(lan.get('EMBED').DES + message)
                        client.channels.cache.get(CHANNEL).send(EMBEDMSG)
                    } else if (LANG === 'EN') {
                        EMBEDMSG.setTitle(lan.get('EMBED').TITLE + authorUSERNAME + " | " + authorID)
                        EMBEDMSG.setDescription(lan.get('EMBED').DES + message)
                        client.channels.cache.get(CHANNEL).send(EMBEDMSG)
                    } else if (LANG === 'IR') {
                        EMBEDMSG.setTitle(lan.get('EMBED').TITLE + authorUSERNAME + " | " + authorID)
                        EMBEDMSG.setDescription(lan.get('EMBED').DES + message)
                        client.channels.cache.get(CHANNEL).send(EMBEDMSG)
                    }
                }
            } else {
                return ctx.reply(setting.get('general').langerr);
            }
        }
    }
})

process.on('unhandledRejection', err => {
    console.log(err);
});