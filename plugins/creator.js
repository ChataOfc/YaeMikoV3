let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
â¢ @${nomorown.split`@`[0]} â¢
------- ${nameown} -------

ð *Pemberitahuan*
â¢ Owner menerima save contact
â¢ Owner berhak blockir tanpa alasan
â¢ Berbicaralah yang sopan & tidak spam
â¢ Owner Hanya merespon yang berkaitan dengan BOT
â¢ No Telp`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
*É´á´á´á´:* Okta
*á´É¢á´:* 16áµÊ°
*á´á´á´¡á´á´:* Chaca

*ÊÉªÊá´Êá´á´Ê:* 31
*á´á´á´Êá´ss:* Indonesia, Jatim

*- - sá´ÉªÊÊs: - -* 
> JavaScript [77.7%]
Nga Bisa JeEs
> Python [20.4%]
Nga Bisa Piton
> CSS [88.1%]
Nga Bisa Layouting
> Html [100%]
P Adu EsCe

ð· *Instagram:* ${sig}
ð *Github:* ${sgh}
ð¥ *Whatsapp* wa.me/${nomorown}
ð *Portofolio:* http://yaemiko.ezyro.com/?i=1

`
  let teks = ' '
const sections = [
   {
	title: `${htjava} OWNER âââââââââÂ·â¢`,
	rows: [
	    {title: "ð± â¢ Nomor", rowId: ".owner nomor"},
	{title: "ð¨ â¢ Biodata", rowId: ".owner bio"},
	]
    },{
	title: `${htjava} SUPPORT ME âââââââÂ·â¢`,
	rows: [
	    {title: "ð¹ â¢ Donasi", rowId: ".donasi"},
	{title: "ð â¢ Sewa", rowId: ".sewa"},
	{title: "ð â¢ Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "ð¬ á´Êá´á´s", null,null, [["á´á´É´á´sÉª", '.donasi'], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`â®â° Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
