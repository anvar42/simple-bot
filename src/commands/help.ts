import { Context } from 'telegraf';

export default async function helpCommand(ctx: Context) {
  await ctx.reply(
    `📘 Buyruqlar:\n\n` +
    `/group - Guruhlar ro'yxati\n` +
    `/rules - Qoidalar\n` +
    `/warn - Ogohlantirish (admin)\n` +
    `/roadmap - Yo'l xaritasi\n` +
    `/about - Bot haqida\n` +
    `/check - Chat ID`
  );
}
