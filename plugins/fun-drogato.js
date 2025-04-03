let handler = async (m, { conn, command, text }) => {
    // Genera un livello casuale di alcol nel sangue
    let width = Math.floor(Math.random() * 101);

    // Determina il messaggio in base al livello
    let finalPhrase = width >= 70 
        ? "🌿 Attenti che si pippa pure la farina" 
        : width >= 30 
        ? "🌿 Non sa pippare, aumenta le dosi!!" 
        : "🌿 Un'esempio da seguire, complimenti.";

    // Creazione del messaggio
    let message = `
『💬』 ══ •⊰✰⊱• ══ 『💬』

MOMENTO DEL DRUG TEST! 🌿 
━━━━━━━━━━━━━━
 ${text ? text : 'Tu'} ha un tasso alcolemico del ${width}%! 🌿
『💬』 ══ •⊰✰⊱• ══ 『💬』

${finalPhrase}
`.trim();

    const messageOptions = {
        contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363298520077920@newsletter',
                serverMessageId: '',
                newsletterName: `whatsapp-spam-italia` // Utilizzo della variabile botName
            },
        }
    };

    // Invia il messaggio con le menzioni e le opzioni
    m.reply(message, null, { mentions: conn.parseMention(message), ...messageOptions });
};

handler.command = /^(drogato)$/i;

export default handler;