import { Context } from 'telegraf';
import { isAdmin } from '../utils/guard';

export default async function warnCommand(ctx: Context) {
  const replyTo = ctx.message?.from;
  if (!replyTo) {
    return await ctx.reply('⚠️ Javob qilib yozing!');
  }

  const admin = await isAdmin(ctx);
  if (!admin) {
    return await ctx.reply('⛔ Bu buyruq faqat adminlar uchun!');
  }

  const user = replyTo!;
  await ctx.reply(`⚠️ @${user.username || user.first_name} offtopic uchun ogohlantirildi.`);
}
