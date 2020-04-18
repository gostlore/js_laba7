const TelegramBot = require('/home/Univer/Nodejs_Telegram/node_modules/node-telegram-bot-api')

const token_access = '1080279441:AAEl9I_x19z0gFiVHRd2d8CwL6n4pT5Z5hM'

const bot = new TelegramBot(token_access, {
	polling: true
})

bot.on('message', (msg) => {
	console.log(msg)
	bot.sendMessage(msg.chat.id, 'Shalom !' + msg.first_name)
})