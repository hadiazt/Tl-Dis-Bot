const { Database } = require('beta.db')
const setting = new Database('./data/config.json')
const language = new Database('./lang/config.json')

var telegram = setting.get('telegram')
var dis = setting.get('discord')
var langconfig = setting.get('general')


const { Telegraf } = require('telegraf')
const tlbot = new Telegraf(telegram.token)
tlbot.launch()

const { Client } = require('discord.js')
const client = new Client()
client.login(dis.token)