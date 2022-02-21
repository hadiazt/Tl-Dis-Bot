const { Database } = require('beta.db')
const setting = new Database('./data/config.json')

var TL_token = setting.get('tltoken');
var DIS_token = setting.get('distoken');
var LANG = setting.get('general').lang; // KR / EN / IR

const { Telegraf } = require('telegraf')
const bot = new Telegraf(TL_token)
bot.launch()

const { Client } = require('discord.js')
const client = new Client()
client.login(DIS_token)

bot.start((ctx) => ctx.reply(setting.get('general').start))
bot.help((ctx) => ctx.reply(setting.get('general').help))

