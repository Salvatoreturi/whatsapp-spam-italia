let buatall = 1;
let cooldowns = {};

const rcanal = "default_value"; // Sostituisci "default_value" con il valore appropriato

let handler = async (m, { conn, args, usedPrefix, command, DevMode }) => {
    let user = global.db.data.users[m.sender];
    let randomaku = Math.floor(Math.random() * 101);
    let randomkamu = Math.floor(Math.random() * 55);
    let Aku = randomaku * 1;
    let Kamu = randomkamu * 1;
    let count = args[0];
    let who = m.fromMe ? conn.user.jid : m.sender;
    let username = conn.getName(who);

    let tiempoEspera = 15;

    if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
        let tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000));
        conn.reply(m.chat, `🚩 Hai già avviato una scommessa di recente, aspetta *⏱ ${tiempoRestante}* per scommettere di nuovo.`, m, rcanal);
        return;
    }

    cooldowns[m.sender] = Date.now();

    count = count
        ? /all/i.test(count)
            ? Math.floor(global.db.data.users[m.sender].limit / buatall)
            : parseInt(count)
        : args[0]
        ? parseInt(args[0])
        : 1;
    count = Math.max(1, count);

    if (args.length < 1) {
        return conn.reply(
            m.chat,
            `🚩 Inserisci la quantità di 💶 Unitycoins che vuoi scommettere contro *whatsapp-spam-italia*.\n\nEsempio:\n> *${usedPrefix + command}* 100`,
            m,
            rcanal
        );
    }

    if (user.limit >= count * 1) {
        user.limit -= count * 1;
        if (Aku > Kamu) {
            conn.reply(
                m.chat,
                `🌵 Vediamo che numeri avete!\n\n➠ *whatsapp-spam-italia*: ${Aku}\n➠ *${username}*: ${Kamu}\n\n> ${username}, *HAI PERSO* ${formatNumber(count)} 💶 Unitycoins.`,
                m,
                rcanal
            );
        } else if (Aku < Kamu) {
            user.limit += count * 2;
            conn.reply(
                m.chat,
                `🌵 Vediamo che numeri avete!\n\n➠ *whatsapp-spam-italia*: ${Aku}\n➠ *${username}*: ${Kamu}\n\n> ${username}, *HAI VINTO* ${formatNumber(count * 2)} 💶 Unitycoins.`,
                m,
                rcanal
            );
        } else {
            user.limit += count * 1;
            conn.reply(
                m.chat,
                `🌵 Vediamo che numeri avete!\n\n➠ *whatsapp-spam-italia*: ${Aku}\n➠ *${username}*: ${Kamu}\n\n> ${username}, ottieni ${formatNumber(count * 1)} 💶 Unitycoins.`,
                m,
                rcanal
            );
        }
    } else {
        conn.reply(m.chat, `Non hai *${formatNumber(count)} 💶 Unitycoins* da scommettere!`, m, rcanal);
    }
};

handler.help = ['scommetti <quantità>'];
handler.tags = ['game'];
handler.command = /^(scommetti|casinò|casino)$/i;
handler.register = true;

handler.fail = null;

export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function segundosAHMS(segundos) {
    let minuti = Math.floor(segundos / 60);
    let secondi = segundos % 60;
    return `${minuti}m ${secondi}s`;
}

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}