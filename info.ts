import { ICommand } from "wokcommands";
import { GuildMember, MessageEmbed } from "discord.js";

export default {
    category: 'Testing',
    description: 'info command 📄',

    slash: 'both',
    testOnly: false,

    callback: ({ guild, member }) => {
        const info = new MessageEmbed()
        .setTitle('info command')
        .addField('members', `${member.guild.memberCount}`)
        .addField('owner', `\<@!${guild?.ownerId}>`)
        .addField('channels', `${guild?.channels.channelCountWithoutThreads}`)
        return info
    }
} as ICommand