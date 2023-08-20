/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const fetch = require('node-fetch')

let handler = async (m, { conn, command, args }) => {
  if (!args[0]) {
    return conn.reply(m.chat, '*Example*: .brainly indonesia', m)
  }
  let apikey = 'ayakaviki'
  let query = encodeURIComponent(args.join(' '))
  let url = `https://api.lolhuman.xyz/api/brainly?apikey=${apikey}&query=${query}`
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = await fetch(url)
  let json = await res.json()
  if (json.status !== 200) {
    return conn.reply(m.chat, 'Maaf, terjadi kesalahan saat mengambil data dari server', m)
  }
  let result = json.result
  if (result.length === 0) {
    return conn.reply(m.chat, 'Maaf, tidak dapat menemukan jawaban untuk pertanyaan tersebut', m)
  }
  let answer = result[0].answer.content
  let message = `*Pertanyaan:* ${result[0].question.content}\n\n*Jawaban:* ${answer}`
  let response = await fetch('https://cdn.jsdelivr.net/gh/SazumiVicky/Storage@main/IMG_20230430_192107_543.jpg')
  let buffer = await response.buffer()
  conn.sendFile(m.chat, buffer, 'brainly.jpg', message.trim(), m)
}

handler.help = ['brainly <teks>']
handler.tags = ['tools']
handler.command = /^(brainly)$/i
handler.register = true
handler.limit = true

module.exports = handler