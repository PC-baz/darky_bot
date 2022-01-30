import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'help command ❓',

    slash: 'both',
    testOnly: false,

    callback: ({ guild, member }) => {
        const help = new MessageEmbed()
        .setTitle('help command')
        .addField("Rules Channel", `\<#${guild?.rulesChannelId}>`)
        .addField('info', '$info')
        return help
    },
} as ICommand