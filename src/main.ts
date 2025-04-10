import { Telegraf } from 'telegraf';
import bot from './bot';
import { appConfig } from './config';

const { TOKEN } = appConfig();

const botInstance = new Telegraf(TOKEN);
bot(botInstance);

console.log('Bot ishga tushmoqda...');

botInstance.launch().then(() => {
  console.log('✅ Bot ishga tushdi!');
});
