let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
▧「 *𝙎𝙚𝙥𝙚𝙘𝙞𝙖𝙡 𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧* 」

- Allah SWT
- My parents
- All Friends
- All Contributors
- All Creator Bot
- Okta
- SaXia Team
- Adiwajshing
- Nurutomo
- BochilGaming
`.trim()
  conn.sendButton(m.chat, caption, global.wm, 'https://telegra.ph/file/b413995afdd30d6abbc72.jpg', [`Dᴏɴᴀsɪ`, '.donasi'],m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto)$/i

handler.register = true
export default handler