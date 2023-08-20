var handler = async (m, {
 conn
 }) => {
  var stats = Object.entries(db.data.stats).map(([key, val]) => {
    var name = Array.isArray(plugins[key]?.help) ? plugins[key]?.help?.join(' , ') : plugins[key]?.help || key 
    if (/exec/.test(name)) return
    return { name, ...val }
  })
  stats = stats.sort((a, b) => b.total - a.total)
  var handlers = stats.slice(0, 100).map(({
   name, 
   total, 
   last
 }) => {
    return ` *Command* : *${name}*\n• *Global HIT* : ${total}`
  }).join`\n\n`
 conn.sendMessage(m.chat, {
text: handlers,
contextInfo: {
externalAdReply: {
title: "",
body: "",
thumbnailUrl: "https://cdn.jsdelivr.net/gh/SazumiVicky/Storage@main/IMG_20230430_192107_543.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}})
};
handler.command = handler.help = ['dashboard', 'dash', 'views']
handler.tags = ['main']
handler.register = true;
handler.limit = true;
module.exports = handler;