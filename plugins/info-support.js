import 'os';
import 'util';
import 'human-readable';
import '@whiskeysockets/baileys';
import 'fs';
import 'perf_hooks';

let handler = async (_0x4955de, { conn: _0x4b9a49, usedPrefix: _0xeb2cc9 }) => {
  let ownerNumber = "46737807114"; // Numero dell'owner aggiornato

  let _0x414c2d = {
    'key': {
      'participants': "0@s.whatsapp.net",
      'fromMe': false,
      'id': 'Halo'
    },
    'message': {
      'locationMessage': {
        'name': "Supporto bot",
        'jpegThumbnail': await (await fetch("https://qu.ax/cSqEs.jpg")).buffer(),
        'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=${ownerNumber}:+${ownerNumber}\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD`
      }
    },
    'participant': "0@s.whatsapp.net"
  };

  let _0x259d4e = `
╔═══════════════╗
       👑 *SUPPORTO BOT* 👑
╚═══════════════╝

➤ UN OPERATORE ARRIVERÀ A BREVE PER DARTI SUPPORTO

✨ *NEL FRATTEMPO* ✨

➤ Se hai difficoltà a scaricare il bot:
  📌 Segui il tutorial passo-passo
https://youtube.com/shorts/qek7wWadhtI?si=MrrA3bLWWAsLmpw6

➤ Se non riesci ad accedere al canale:
  📞 Contatta il supporto:
  ➟ +86 19858371809
═════════════════
💡 *DOMANDE FREQUENTI* 💡

❓ Come faccio a inserire il bot al mio gruppo?
✅ Basta mandare l'invito o il link del gruppo in privato al bot. Deve avere minimo 25 membri.

═════════════════

➤ IG creatore: https://www.instagram.com/yyktv.vale/

═════════════════


> 𝐩𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲
`.trim();

  let _0xf5c7c0 = global.db.data.nomedelbot || "𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲";

  // Invia il messaggio con una grafica migliorata
  _0x4b9a49.sendMessage(_0x4955de.chat, {
    'text': _0x259d4e,
    'contextInfo': {
      'mentionedJid': _0x4b9a49.parseMention(wm),
      'forwardingScore': 0x1,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': {
        'newsletterJid': "120363298520077920@newsletter",
        'serverMessageId': '',
        'newsletterName': 'ℝ𝕚𝕟𝕠𝕩ᵇᵒᵗ²⁴²✦'
      }
    }
  }, {
    'quoted': _0x414c2d
  });
};

handler.help = ["menu"];
handler.tags = ["info"];
handler.command = /^(supporto)$/i;
export default handler;

// Funzione per calcolare il tempo di attività
function clockString(_0x5dad08) {
  let _0x233c78 = Math.floor(_0x5dad08 / 3600000);
  let _0x2b10bc = Math.floor(_0x5dad08 / 60000) % 60;
  let _0x2c7d73 = Math.floor(_0x5dad08 / 1000) % 60;
  console.log({
    'ms': _0x5dad08,
    'h': _0x233c78,
    'm': _0x2b10bc,
    's': _0x2c7d73
  });
  return [_0x233c78, _0x2b10bc, _0x2c7d73].map(_0x4bd0ef => _0x4bd0ef.toString().padStart(2, 0)).join(':');
}
