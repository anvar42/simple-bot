import { Context } from 'telegraf';
import { mainMenuKeyboard } from '../utils/keyboard';

export const startCommand = async (ctx: Context) => {
  await ctx.reply(
    `👋 Salom ${ctx.from?.first_name}, Xinux botga xush kelibsiz!`,
    { reply_markup: mainMenuKeyboard }
  );
};
