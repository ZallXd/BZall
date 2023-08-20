let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = require('@adiwajshing/baileys')
let moment = require('moment-timezone')
let fetch = require('node-fetch')
let fs = require('fs')

let qris = 'https://telegra.ph/file/9fe58048bb482ff1199a2.jpg'
let handler = async (m, { conn, args, usedPrefix, command }) => {
const messa = await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/9fe58048bb482ff1199a2.jpg') }, { upload: conn.waUploadToServer })
const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage, 
"productId": "6188654807917484",
"title": `Donasi kepada Arss Daebotsu :3`,
"description": `Chat Owner Kalo Mau Donasii😘`,
"currencyCode": "IDR",
"bodyText": wm,
"footerText": wm,
"priceAmount5000": "10000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount5000": "10000000",
"retailerId": wm,
"url": "http://wa.me/62882003146309"
},
"businessOwnerJid": "62882003146309@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })    

conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi)$/i

handler.limit = true

module.exports = handler