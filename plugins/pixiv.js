var fetch = require("node-fetch")

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan Judul!\n\nContoh: ${usedPrefix + command} loli kawai`
  var dann = await fetch(`https://api.lolhuman.xyz/api/pixiv?apikey=gunturganteng&query=${text}`)
  var res = await dann.json()
  var name = m.sender
  var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6288980870067@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  await conn.reply(m.chat, wait, fkonn)
  conn.sendFile(m.chat, res.result[0].image, '', res.result[0].title, m)
}

handler.command = handler.help = ['pixiv']
handler.tags = ['internet']
handler.limit = true
module.exports = handler