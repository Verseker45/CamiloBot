let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './RPG.jpeg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
β||γπ‘οΈγγπ‘οΈ πππ¨πͺπ ππ½π€π© π‘οΈγγπ‘οΈγ||β
β π° *Β‘Hola! ${username}* π°
βββββββββββββββββββββ
β ποΈ *Β‘EstΓ‘s apunto de iniciar tΓΊ Aventura!*
βββββββββββββββββββββ
ββ₯ βββ _${usedPrefix}adventure_
ββ₯ ββπΉ _${usedPrefix}apostar_
ββ₯ βββ _${usedPrefix}cd_
ββ₯ ββπΉ _${usedPrefix}cooldown_
ββ₯ βββ _${usedPrefix}daily_
ββ₯ ββπΉ _${usedPrefix}feed_ *mascota*
ββ₯ βββ _${usedPrefix}inventario_
ββ₯ ββπΉ _${usedPrefix}lb_
ββ₯ βββ _${usedPrefix}mining_
ββ₯ ββπΉ _${usedPrefix}monthly_
ββ₯ βββ _${usedPrefix}open_
ββ₯ ββπΉ _${usedPrefix}tienda | shop_
ββ₯ βββ _${usedPrefix}transferir_
ββ₯ ββπΉ _${usedPrefix}use_
ββ₯ βββ _${usedPrefix}weekly_
||π‘οΈγγπ‘οΈγγπ‘οΈγγπ‘οΈγγπ‘οΈγγπ‘οΈ||`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '*Gata Dios*', 'MENU', `#menu`, 'MENU AUDIOS', `#audiosrandom`, 'πΆπππΏπΎπ πΎπ΅πΈπ²πΈπ°π»π΄π', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menurpg|rpgmenu)$/i
handler.fail = null
handler.rowner=true
module.exports = handler
