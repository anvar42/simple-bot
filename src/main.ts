import { Telegraf } from 'telegraf';
import bot from './bot';
import { appConfig } from './config';

const { TOKEN } = appConfig();

const botInstance = new Telegraf(TOKEN);
bot(botInstance);

botInstance.launch().then();

console.log('✅ Bot ishga tushdi!');
