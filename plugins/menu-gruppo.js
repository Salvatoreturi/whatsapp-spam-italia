import { performance } from 'perf_hooks';
import path from 'path';
import { fileURLToPath } from 'url';

// Definizione di __dirname per i moduli ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const handler = async (message, { conn, usedPrefix }) => {
    const userCount = Object.keys(global.db.data.users).length;
    const botName = global.db.data.nomedelbot || 'ChatUnity';

    const menuText = generateMenuText(usedPrefix, botName, userCount);

    // Percorso dell'immagine
    const imagePath = path.join(__dirname, '../menu/menu.gruppo.jpeg');

    const messageOptions = {
        contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363298520077920@newsletter',
                serverMessageId: '',
                newsletterName: `${botName}`
            },
        }
    };

    // Invia l'immagine con il menu
    await conn.sendMessage(
        message.chat,
        { image: { url: imagePath }, caption: menuText, ...messageOptions },
        { quoted: message }
    );
};

async function fetchProfilePictureUrl(conn, sender) {
    try {
        return await conn.profilePictureUrl(sender);
    } catch (error) {
        return 'default-profile-picture-url'; // Fallback URL in caso di errore
    }
}

handler.help = ['menugruppo'];
handler.tags = ['menugruppo'];
handler.command = /^(gruppo|menugruppo)$/i;

export default handler;

function generateMenuText(prefix, botName, userCount) {
    return `
╭━〔 *⚡𝑴𝑬𝑵𝑼 𝐆𝐑𝐔𝐏𝐏𝐎⚡* 〕━┈⊷
┃◈╭━━━━━━━━━━━━━·๏
┃◈┃• *𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝐏𝐄𝐑 𝐈 𝐌𝐄𝐌𝐁𝐑𝐈*
┃◈╰━━━━━━━━━━━━┈⊷
┃◈
┃◈╭─✦ MUSICA & AUDIO ✦═╗
┃◈┃• 🎵 *${prefix}play* (canzone)
┃◈┃• 🎥 *${prefix}video* (canzone) 
┃◈┃• 🔊 *${prefix}ytmp4* (in arrivo)
┃◈┃• 🎶 *${prefix}shazam* (audio) 
┃◈┃• 🔊 *${prefix}tomp3* (video)
┃◈╰━━━━━━━━━━━━┈⊷
┃◈
┃◈╭✦ INFORMAZIONI & UTILITÀ ✦╗
┃◈┃• 🤖 *${prefix}ia*
┃◈┃• 🤖 *${prefix}Alya*
┃◈┃• 🌍 *${prefix}meteo* (città)
┃◈┃• 🕒 *${prefix}orario* (città)
┃◈┃• 🌐 *${prefix}traduci* (testo)
┃◈┃• 📊 *${prefix}contaparole* (testo)
┃◈┃• 🆔 *${prefix}id* (gruppo)
┃◈┃• 💻 *${prefix}gitclone* (repo)
┃◈┃• ℹ️ *${prefix}info* [@]
┃◈┃• 📸 *${prefix}setig* [@]
┃◈┃• 📝 *${prefix}msg* [@]
┃◈┃• ❓ *${prefix}script* 
┃◈┃• 📜 *${prefix}regole* (regole gruppo)
┃◈┃• 📜 *${prefix}dashboard* 
┃◈┃• 🔍 *${prefix}cercaporno*
┃◈┃• 🎼 *${prefix}fyadd* 
┃◈┃• 📚 *${prefix}wikipedia* (argomento)
┃◈╰━━━━━━━━━━━━┈⊷
┃◈
┃◈╭✦ IMMAGINI & MODIFICA ✦╗
┃◈┃• 📷 *${prefix}hd* (foto)
┃◈┃• 🖼️ *${prefix}rimuovisfondo* (foto)
┃◈┃• 🔍 *${prefix}rivela* (foto)
┃◈┃• 🖼️ *${prefix}toimg* (sticker)
┃◈┃• 📖 *${prefix}leggi* (foto)
┃◈┃• 🌀 *${prefix}blur* (foto)
┃◈┃• 🖼️ *${prefix}pinterest* (in arrivo)
┃◈┃• 🎴 *${prefix}hornycard* [@utente]
┃◈┃• 🧠 *${prefix}stupido/a* @
┃◈╰━━━━━━━━━━━━┈⊷
┃◈
┃◈╭─✦ GANG SYSTEM ✦═╗
┃◈┃• 🥷🏻 *${prefix}creagang* 
┃◈┃• 🔪 *${prefix}infogang*  
┃◈┃• ⛓ *${prefix}abbandonagang* 
┃◈┃• 🩸 *${prefix}invitogang* @
┃◈┃• 🎧 *${prefix}caccialogang* @
┃◈╰━━━━━━━━━━━━┈⊷
┃◈
┃◈╭─✦ GIOCHI & CASINÒ ✦╗
┃◈┃• 🎮 *${prefix}tris* 
┃◈┃• 🎲 *${prefix}dado* 
┃◈┃• 🎰 *${prefix}slot* 
┃◈┃• 🃏 *${prefix}casinò* 
┃◈┃• 💰 *${prefix}scommessa* (quantità)
┃◈┃• 🔫 *${prefix}roulette* 
┃◈┃• 🪙 *${prefix}moneta* 
┃◈┃• 🧮 *${prefix}mate* 
┃◈┃• 📈 *${prefix}scf* 
┃◈╰━━━━━━━━━━━━┈⊷
┃◈
┃◈╭✦ ECONOMIA & CLASSIFICHE ✦╗
┃◈┃• 💳 *${prefix}portafoglio* 
┃◈┃• 💸 *${prefix}daily* → Ricompensa
┃◈┃• 🏆 *${prefix}classifica* UC 
┃◈┃• 💳 *${prefix}dona* → (tot) @
┃◈┃• 🛒 *${prefix}compra* → Acquista UC
┃◈┃• 🤑 *${prefix}ruba* @ 
┃◈╰━━━━━━━━━━━━┈⊷
┃◈
┃◈╭✦ SOCIAL & INTERAZIONI ✦╗
┃◈┃• 💍 *${prefix}sposami*  
┃◈┃• 😡 *${prefix}odio* @
┃◈┃• 💌 *${prefix}amore* @
┃◈┃• 💋 *${prefix}ditalino* @
┃◈┃• 💋 *${prefix}sega* @
┃◈┃• 💋 *${prefix}bacia* @
┃◈┃• 💋 *${prefix}scopa* @
┃◈┃• 🖕 *${prefix}insulta* @
┃◈┃• 🔥 *${prefix}zizzania* @
┃◈┃• 💍 *${prefix}sposa* @
┃◈┃• 💔 *${prefix}divorzia* @
┃◈┃• 👥 *${prefix}amicizia/listamici* @
┃◈┃• 🗣️ *${prefix}rizz* → @
┃◈╰━━━━━━━━━━━━┈⊷
┃◈
┃◈╭✦ QUANTO È?  ✦╗
┃◈┃• 🏳‍🌈 *${prefix}gay*
┃◈┃• 🏳‍🌈 *${prefix}lesbica* @
┃◈┃• ♿ *${prefix}ritardato/a* @
┃◈┃• ♿ *${prefix}down* @
┃◈┃• ♿ *${prefix}disabile* @
┃◈┃• ♿ *${prefix}mongoloide* @
┃◈┃• ⚫ *${prefix}negro* @
┃◈╰━━━━━━━━━━━━┈⊷
┃◈
┃◈╭✦ TEST & PERSONALITÀ ✦╗
┃◈┃• 🍺 *${prefix}alcolizzato* 
┃◈┃• 🌿 *${prefix}drogato*  
┃◈┃• 🍑 *${prefix}figa* 
┃◈┃• 🍑 *${prefix}ano*
┃◈┃• 🎭 *${prefix}personalita* 
┃◈┃• 🔮 *${prefix}zodiaco* 
┃◈┃• 🏹 *${prefix}nomeninja* 
┃◈┃• 😈 *${prefix}infame* 
┃◈┃• 🙏 *${prefix}topbestemmie* 
┃◈╰━━━━━━━━━━━━┈⊷
┃◈
┃◈╭✦ STICKERS & MEDIA ✦╗
┃◈┃• 🛠️ *${prefix}sticker* (foto)
┃◈┃• 🖼️ *${prefix}png* (sticker)
┃◈┃• 🤕 *${prefix}bonk* 
┃◈┃• 👑 *${prefix}autoadmin* 
┃◈┃• 🚫 *${prefix}obbligo* → V o obb?
┃◈╰━━━━━━━━━━━━┈⊷
┃◈┃• *𝑽𝑬𝑹𝑺𝑰𝑶𝑵𝑬:* ${vs}
┃◈┃• *𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑹:* ChatUnity
┃◈┃• *𝐒𝐔𝐏𝐏𝐎𝐑𝐓𝐎:* (.supporto)
┃◈└──────────┈⊷
╰━━━━━━━━━━━━━┈⊷
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ${botName}
*•────────────•⟢*
  `;
}
