import { performance } from 'perf_hooks';
import fetch from 'node-fetch'; // Assicurati di avere node-fetch installato

const handler = async (message, { conn, usedPrefix }) => {
    const userCount = Object.keys(global.db.data.users).length;
    const botName = global.db.data.nomedelbot || 'ChatUnity';

    const menuText = generateMenuText(usedPrefix, botName, userCount);
    
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

    // Invia la foto con il menu
    const imagePath = './menu/chatunitybot.jpeg';
    await conn.sendMessage(message.chat, { image: { url: imagePath }, caption: menuText, ...messageOptions }, { quoted: message });
};

async function fetchThumbnail(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        return new Uint8Array(arrayBuffer);
    } catch (error) {
        console.error('Errore durante il fetch della thumbnail:', error);
        return 'default-thumbnail'; // Fallback thumbnail in caso di errore
    }
}

handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menuowner|owner)$/i;

export default handler;

function generateMenuText(prefix, botName, userCount) {
    return `
╭━〔 *💬 𝑴𝑬𝑵𝑼 𝑶𝑾𝑵𝑬𝑹 💬* 〕━┈⊷
┃◈╭─────────────·๏
┃◈┃• *𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑹𝑰𝑺𝑬𝑹𝑽𝑨𝑻𝑰 𝑨𝑳𝑳'𝑶𝑾𝑵𝑬𝑹*
┃◈┃
┃◈┃• ⚙️ *${prefix}impostanome*
┃◈┃• ⚙️ *${prefix}resetnome*
┃◈┃• ⚙️ *${prefix}gestisci* @
┃◈┃• ⚙️ *${prefix}setgruppi*
┃◈┃• ⚙️ *${prefix}aggiungigruppi* @
┃◈┃• ⚙️ *${prefix}resetgruppi* @
┃◈┃• ⚙️ *${prefix}setpp* (immagine)
┃◈┃• ⚙️ *${prefix}banuser* @
┃◈┃• ⚙️ *${prefix}unbanuser* @
┃◈┃• ⚙️ *${prefix}blockuser* @
┃◈┃• ⚙️ *${prefix}unblockuser* @
┃◈┃• ⚙️ *${prefix}pulizia* (+)
┃◈┃• ⚙️ *${prefix}getfile*
┃◈┃• ⚙️ *${prefix}salva* (plugin)
┃◈┃• ⚙️ *${prefix}dp* (plugin)
┃◈┃• ⚙️ *${prefix}getplugin*
┃◈┃• ⚙️ *${prefix}join* + link
┃◈┃• ⚙️ *${prefix}out*
┃◈┃• ⚙️ *${prefix}prefisso* (?)
┃◈┃• ⚙️ *${prefix}resetprefisso*
┃◈┃• ⚙️ *${prefix}godmode* {autoadmin}
┃◈┃• ⚙️ *${prefix}azzera* @
┃◈┃• ⚙️ *${prefix}aggiungi* (num. messaggi) @
┃◈┃• ⚙️ *${prefix}rimuovi* (num. messaggi) @
┃◈┃• ⚙️ *${prefix}everygroup* (comando)
┃◈┃• ⚙️ *${prefix}banchat* (gruppo)
┃◈┃• ⚙️ *${prefix}unbanchat* (gruppo)
┃◈┃• ⚙️ *${prefix}riavvia*
┃◈┃• ⚙️ *${prefix}spegnibot*
┃◈┃• ⚙️ *${prefix}aggiornabot*
┃◈┃
┃◈└───────────┈⊷
╰━━━━━━━━━━━━━┈·๏
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ${botName}
*•────────────•⟢*
`.trim();
}
