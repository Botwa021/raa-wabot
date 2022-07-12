let handler =  m => m.reply(`
╭─「 Donasi • Malaysia 」
│ ⬣ touch/go e wallet [01127316764]
│ ⬣ wa.me/601127316764
╰────
╭─「 Donasi • Indoneia 」
│ ⬣ Dana [088233832771
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
