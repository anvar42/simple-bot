import { Telegraf } from 'telegraf';
import { startCommand } from './commands/start';
import aboutCommand from './commands/about';
import checkCommand from './commands/check';
import helpCommand from './commands/help';
import roadmapCommand from './commands/roadmap';
import groupCommand from './commands/rules';
import warnCommand from './commands/warn';
import { inlineHandler } from './utils/inline';
import callbackHandler from './utils/callback';
import rulesCommand from './commands/rules';

export enum Command {
    Start = 'start',
    Help = 'help',
    Group = 'group',
    Roadmap = 'roadmap',
    Warn = 'warn',
    Rules = 'rules',
    About = 'about',
    Check = 'check',
}

export default function (bot: Telegraf) {
  bot.start(startCommand);
  bot.help(helpCommand);
  bot.command(Command.Group, groupCommand);
  bot.command(Command.Roadmap, roadmapCommand);
  bot.command(Command.Warn, warnCommand);
  bot.command(Command.Rules, rulesCommand);
  bot.command(Command.About, aboutCommand);
  bot.command(Command.Check, checkCommand);

  bot.on('inline_query', inlineHandler);
  bot.on('callback_query', callbackHandler);
}
