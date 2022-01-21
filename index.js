var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "〽Personal Coder〽",
assets : {
large_image : "Image",
large_text : "Test" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Bot einladen" , url : "https://discord.com/oauth2/authorize?client_id=929691516782395392&scope=bot&permissions=392313"},{label : "spoofer" ,url : "https://discord.gg/sz7gZRuB"}]
}
})
})
client.login({ clientId : "929691516782395392" }).catch(console.error);