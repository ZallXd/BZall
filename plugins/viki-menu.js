/* Owner: VallzHost */
/* Asisten: */
/* Instagram: @ */
/* Facebook:  */
/* Github: VallzHost */
/* Buy Sc Update: +62856412257530 */
/* Source Code: https://github.com/VallzHost/AyakaV2 */



let axios = require('axios')

let handler = async (m, {
	conn
}) => {
	let user = global.db.data.users[m.sender]
	let name = conn.getName(m.sender)
	let date = new Date().toLocaleDateString('en-US', {timeZone: 'Asia/Makassar'})
	let time = new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Makassar', hour: 'numeric', minute: 'numeric', hour12: true})
	let version = require('../package.json').version
	let author = require('../package.json').author.name
	let greeting = ''

	if (new Date().getHours() >= 0 && new Date().getHours() < 4) {
		greeting = '👋 Good night'
	} else if (new Date().getHours() >= 4 && new Date().getHours() < 12) {
		greeting = '👋 Good morning'
	} else if (new Date().getHours() >= 12 && new Date().getHours() < 18) {
		greeting = '👋 Good afternoon'
	} else if (new Date().getHours() >= 18 && new Date().getHours() < 24) {
		greeting = '👋 Good evening'
	}
	let mainmenu = `ʜᴀɪ sᴀʏᴀ ᴀᴅᴀʟᴀʜ ᴀsɪsᴛᴇɴ ᴀɪ ʏᴀɴɢ ʙᴇʀᴏᴘᴇʀᴀsɪ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴊᴀᴠᴀsᴄʀɪᴘᴛ ᴅᴀɴ ʙᴀɪʟᴇʏs. 
	
    ╭  ◦ ᴄʀᴇᴀᴛᴏʀ: VallzHost
    │  ◦ ꜰᴀᴄᴇʙᴏᴏᴋ: gaada
    ╰  ◦ ᴘʀᴇғɪx: .

    ╭  ◦ ғᴏʀᴍᴀᴛ ᴅᴀғᴛᴀʀ: *.ᴠᴇʀɪғʏ*
    │  ◦ sᴇᴍᴜᴀ ғɪᴛᴜʀ: *.ᴀʟʟᴍᴇɴᴜ*
    ╰  ◦ ʟɪsᴛ ᴘʟᴀɴ: *.ᴘʀɪᴄᴇ*
    
ʜᴀʀᴀᴘ ᴜɴᴛᴜᴋ ʙᴇʀɢᴀʙᴜɴɢ ᴄʜᴀᴛʙᴏᴛ ᴀɢᴀʀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ɪɴғᴏ ᴅᴀɴ ʙᴏɴᴜs sᴇᴛɪᴀᴘ ʜᴀʀɪɴʏᴀ *.ɢᴄʙᴏᴛ*`

	let thumbnailUrl = "https://telegra.ph/file/7db5406ae788821d78627.jpg"

	conn.reply(m.chat, mainmenu, m, {
		contextInfo: {
			externalAdReply: {
				title: `Arss Waii - Arss Waii`,
				body: "ʜɪ, ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ Vallz Waii ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ",
				thumbnailUrl: thumbnailUrl,
				mediaType: 1,
				renderLargerThumbnail: true
			}
		}
	})
}

handler.command = /^menu$/i
handler.help = ['menu']
handler.tags = ['main']
handler.limit = true
handler.register = true

module.exports = handler