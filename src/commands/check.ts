import { Context } from 'telegraf';

export default async function checkCommand(ctx: Context) {
  await ctx.replyWithHTML(`🆔 Chat ID: <code>${ctx.chat?.id}</code>`);
}
