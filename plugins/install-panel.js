let handler = async (m, { conn, args, text, usedPrefix, command}) => {
let jasa = `
╭─▸ _*LIST HARGA PANEL Arzs HOSTING*_
│ *Paket G1*
│ 1GB RAM | 1GB DISK | 25% CPU
│ _*Rp.2.000*_
│ *Paket G2*
│ 2GB RAM | 2GB DISK | 50% CPU
│ _*Rp.3.000*_
│ *Paket G3*
│ 3GB RAM | 3GB DISK | 75% CPU
│ _*Rp.4.000*_
│ *Paket G4*
│ 4GB RAM | 4GB DISK | 100% CPU
│ _*Rp.5.000*_
│ *Paket G5*
│ 5GB RAM | 5GB DISK | 125% CPU
│ _*Rp.6.000*_
│ *Paket G6*
│ 6GB RAM | 6GB DISK | 150% CPU
│ _*Rp.7.000*_
│ *Paket G7*
│ 7GB RAM | 7GB DISK | 175% CPU
│ _*Rp.8.000*_
│UNLI RAM | UNLI DISK |UNLI CPU
│ _*Rp.9.000*_
│ RESELLER PANEL
│ _*Rp.15.000*_
│ ADMIN PANEL
│ _*Rp.20.000*_
╰┬──────────────────────╸
╭╯ _*INFORMATION*_
│ _Melakukan top up saldo artinya anda_
│ _setuju dengan segala kebijakan kami,_
╰┬──────────────────────╸
╭┤ _*Contact Admin*_
││ wa.me/62882003146309
╰┴──────────────╸
╭┤ 
││
│ _*READY ALL SC*_
│```SC BOT MD Rp.10.000```
│```SC BOT BUG Rp.13.000```
│```SC BOT PUSHKONTAK Rp.15.000``` *VIP*
│```SC BOT STORE Rp.15.000``` *BISA BUAT JAGA GRUP JUGA
│ *Terlalu Mahal? Bisa Kok Nego Dikit Asal NGOTAK*
╰┴──────────────╸
𝗞𝗲𝘂𝗻𝘁𝘂𝗻𝗴𝗮𝗻 :
1. Run Bot WA supaya On 24 Jam
2. Panel Aktif 1 Bulan. 
3. Garansi 1 Bulan jika Panel Eror (Ganti Baru). 
4. Script 100% Privasi, Tidak Akan Di Coppy/Di Ambil.
5. Dibantu Pemasangan Modules
6. Dibantu Pemasangan Sc
7. Dibantu Setting 24jamPAKET K1

*[VERSI PAKETAN]*
PROMO !!⚠️

SC BUG + PANNEL 5GB Rp.10.000
PAKET K2
SC PUSHKONTAK VIP + PANNEL 3GB Rp.5.000
PAKET K3
SC BOT MD + PANNEL UNLI Rp.10.000
PAKET K4
SC STORE + PANNEL 5GB Rp.8.000

Contact Owner https://wa.me/62882003146309
`
m.reply(jasa)
}
handler.help = ['jasainstallpannel', 'installpanel']
handler.tags = ['ownerstore']
handler.command = /^(jasainstallpannel|installpanel)$/i;
module.exports = handler;
