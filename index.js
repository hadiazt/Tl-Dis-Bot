const { Database } = require('beta.db')
const setting = new Database('./data/config.json')
var telegram = setting.get('telegram')
var dis = setting.get('discord')
var lang = setting.get('general')



