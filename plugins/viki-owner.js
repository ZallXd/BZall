/* Owner: vallzhost */
/* Asisten:  */
/* Instagram: @ */
/* Facebook:  */
/* Github: VallzHost */
/* Buy Sc Update: +62856412257530 */
/* Source Code: https://github.com/VallzHost/AyakaV2 */


var name = global.nameowner;
var numberowner = global.numberowner;
var gmail = global.mail;

const {
	default: makeWASocket,
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	downloadContentFromMessage,
	downloadHistory,
	proto,
	getMessage,
	generateWAMessageContent,
	prepareWAMessageMedia
} = require("@adiwajshing/baileys");

var handler = async (m, {
	conn
}) => {
	const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN: ${name}
item.ORG: Developer
item1.TEL;waid=${numberowner}:${numberowner}@s.whatsapp.net
item1.X-ABLabel:Developer 
item2.EMAIL;type=INTERNET:${gmail}
item2.X-ABLabel:Email Owner
item3.ADR:;;🇮🇩 Indonesia;;;;
item3.X-ABADR:ac
item4.EMAIL;type=INTERNET:vallzofc@gmail.com
item4.X-ABLabel:Email Developer 
item3.ADR:;;🇨🇳 China;;;;
item3.X-ABADR:ac 
item5.URL:${instagram}
item5.X-ABLabel:Website
END:VCARD`;

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

	let sentMsg = await conn.sendMessage(m.chat, {
		contacts: {
			displayName: 'CN',
			contacts: [{
				vcard
			}]
		}
	});
};

handler.command = handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.register = false;
handler.limit = false;
module.exports = handler;