import { Context } from 'telegraf';

export default async function aboutCommand(ctx: Context) {
  await ctx.reply('🤖 Ushbu bot Test uchun yaratilgan. Kod ochiq: https://github.com/Anvar571/simple-bot');
}
