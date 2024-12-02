let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `❄️𝔐𝔦𝔠𝔥𝔦𝔅𝔬𝔱 𝔱𝔢 𝔡𝔢𝔰𝔢𝔞 𝔲𝔫𝔞 𝔣𝔢𝔩𝔦𝔷 𝔫𝔞𝔳𝔦𝔡𝔞𝔡!❄️ ${pesan}`
let teks = `*𝘼𝙘𝙩𝙞𝙫𝙚𝙣𝙨𝙚 𝙗𝙤𝙩𝙨 𝙃𝙤𝙃𝙤𝙃𝙤🎅🏻*\n${oi}\n\n*💅🏻@𝔠𝔢𝔬𝔤𝔢𝔯𝔦𝔭𝔦𝔲𝔪.𝔡𝔷𝔫*\n`
for (let mem of participants) {
teks += `☃️🎅🏻ᝰ.ᐟ @${mem.id.split('@')[0]}\n`}
teks += `MichiBot`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) } )
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
