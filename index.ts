import DiscordJs, { Channel, GuildMember, Intents, MessageEmbed, User } from 'discord.js'
import dotenv from 'dotenv'
import WOKCommands from 'wokcommands'
import path from 'path'
dotenv.config()

const prefix = '$'

const client = new DiscordJs.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
})
client.on('ready', () => {
    console.log('The bot is ready')
    client.user?.setActivity("$help")
    client.user?.setUsername('𝑷𝑪_𝒃𝒂𝒛')
    new WOKCommands(client, {

        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
      })
      .setDefaultPrefix('$')

})
client.on('guildMemberAdd', (member) => {
    const members = `members: ${member.guild.memberCount}`
})

client.login(process.env.TOKEN)