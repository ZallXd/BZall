/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let axios = require('axios')
let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  try {
    let response = await axios.get('https://api.lolhuman.xyz/api/doujindesulatest?apikey=ayakaviki')
    let result = response.data.result
    let index = Math.floor(Math.random() * result.length)
    let doujinshi = result[index]
    let thumbnailBuffer = await (await fetch(doujinshi.thumbnail)).buffer()
    let caption = `
*Judul*: ${doujinshi.title}
*Jenis*: ${doujinshi.type}
*Episode*: ${doujinshi.episode}
*Link*: ${doujinshi.link}
`.trim()
    conn.sendFile(m.chat, thumbnailBuffer, 'doujin.jpg', caption, m)
  } catch (e) {
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
    console.log(e)
  }
}

handler.help = ['doujinlatest']
handler.tags = ['premium']
handler.premium = true
handler.command = /^doujinlatest$/i

module.exports = handler