global.owner = ['62856412257530']  
global.mods = ['62856412257530'] 
global.prems = ['62856412257530']

global.nameowner = 'Arss Waii'
global.numberowner = '62856412257530' 
global.mail = 'vallzofc@gmail.com'
global.dana = '?'
global.pulsa = '?'
global.gopay = '?'

global.namebot = 'VallzBotz'
global.gc = 'https://chat.whatsapp.com/EM1weUHHdxe5H5rCDAwlDR'
global.web = 'https://chat.whatsapp.com/EM1weUHHdxe5H5rCDAwlDR'
global.instagram = '-'
global.sig = 'http://wa.me/62856412257530?text=.gcbot'

global.lolkey = 'ayakaviki'
global.rose = 'Rs-AgesuXD';
global.zenzkey = 'BagasPrdn'
global.btc = 'Admin'
global.wm = 'Vallz Host : 3'
global.well = 'http://wa.me/62856412257530?text=hai+kak+ini+no+owner+bot'
global.watermark = wm
global.wm2 = 'Vallz Host'
global.wm3 = 'Vallz Host : 3'
global.wm4 = 'Vallz Host : 3'
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.wait = 'Wait a moment..'
global.eror = 'Server Error'
global.rose = 'Rs-AgesuXD'
global.benar = 'Benar\n'
global.salah = 'Salah\n'
global.sourceUrl = "http://wa.me/62882003146309?text=.gcbot"
global.body = "Don't Spam Or Block Permanent🦄"

global.stiker_wait = 'Wait a moment..'
global.packname = '@ArssWaii : 3'
global.author = 'Arss Waii\n'

global.htki =  '⬣───「' // Hiasan kiri
global.htka = '」───⬣' // Hiasan kanan
global.htjava = '❃' // Hiasan
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''

global.APIs = { 
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'https://api.botcahx.live',
  popcat: 'https://api.popcat.xyz',
  rey: 'https://sekha.me'
}
global.APIKeys = { // Tambahkan Apikey nya disini

  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://pencarikode.xyz': 'pais', 
  'https://zekais.com': 'apikeymu',
  'https://api.botcahx.live': 'QaepQXxR',
  'https://api.lolhuman.xyz': 'ayakaviki',
}

/*Yang Ini Untuk Setting Rpg Game Yah Kak*/
global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

/*Yang Ini Jangan Di Ubah Yah Kak*/
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})