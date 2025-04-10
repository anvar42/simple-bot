import { Context } from 'telegraf';

export default async function callbackHandler(ctx: Context) {
  const data = ctx.callbackQuery?.message;
  await ctx.answerCbQuery(`Siz tanladingiz: ${data}`);
}
