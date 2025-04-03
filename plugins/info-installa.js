import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@whiskeysockets/baileys'
import fs from 'fs'
const ims = './bb.jpg'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = (neww - old).toFixed(4)
let prova = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"
}, "message": { 
"orderMessage": { text: '𝐒𝐂𝐀𝐑𝐈𝐂𝐀 𝐂𝐇𝐀𝐓𝐔𝐍𝐈𝐓𝐘-𝐁𝐎𝐓 💬',
"itemCount": 2023,
"status": 1,
"surface" : 1,
    "message": '𝐒𝐂𝐀𝐑𝐈𝐂𝐀 𝐂𝐇𝐀𝐓𝐔𝐍𝐈𝐓𝐘-𝐁𝐎𝐓 💬',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=15395490858:+1 (539) 549-0858\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD`
}}, "participant": "0@s.whatsapp.net"
}
let info = `
『💬』 ══ •⊰✰⊱• ══ 『💬』

𝐒𝐂𝐀𝐑𝐈𝐂𝐀 𝐂𝐇𝐀𝐓𝐔𝐍𝐈𝐓𝐘-𝐁𝐎𝐓

Segui questi passaggi per installare ChatUnity Bot correttamente su Termux

repository termux https://github.com/Salvatoreturi/whatsapp-spam-italia

video yt tutorial https://youtube.com/shorts/qek7wWadhtI?si=MrrA3bLWWAsLmpw6

『💬』 ══ •⊰✰⊱• ══ 『💬』

1. Scaricare e installare Termux

Scarica la versione corretta di Termux dal link seguente:

🔗 Scarica Termux 0.119.1

https://www.mediafire.com/file/0npdmv51pnttps0/com.termux_0.119.1-119_minAPI21(arm64-v8a,armeabi-v7a,x86,x86_64)(nodpi)_apkmirror.com.apk/file

Dopo aver scaricato il file APK, installalo sul tuo dispositivo e concedi i permessi richiesti.

『💬』 ══ •⊰✰⊱• ══ 『💬』

2. Configurare Termux

Apri Termux ed esegui il seguente comando:

termux-setup-storage

Quando richiesto, concedi le autorizzazioni necessarie.

『💬』 ══ •⊰✰⊱• ══ 『💬』

3. Installare ChatUnity Bot

Ora esegui il seguente comando per aggiornare Termux:

apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/chatunitycenter/chatunity-bot/main/chatunity.sh | bash

『💬』 ══ •⊰✰⊱• ══ 『💬』

4. Avviare ChatUnity Bot

Dopo l’installazione, potrai avviare il bot utilizzando il comando che verrà mostrato al termine del processo.

Se riscontri problemi, verifica di aver seguito tutti i passaggi correttamente e controlla eventuali messaggi di errore su Termux.

『💬』 ══ •⊰✰⊱• ══ 『💬』
`.trim() 
conn.reply(m.chat, info,prova, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
body: 'ChatUnity',         
previewType: 0, thumbnail: fs.readFileSync("./menu/Menu2.jpg"),
sourceUrl: `https://github.com/Salvatoreturi/whatsapp-spam-italia`}}})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(scarica|installa|git|instalarbot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
