import { Context } from 'telegraf';

export async function isAdmin(ctx: Context): Promise<boolean> {
  if (!ctx.chat || ctx.chat.type === 'private') return false;
  const member = await ctx.telegram.getChatMember(ctx.chat.id, ctx.from!.id);
  return ['creator', 'administrator'].includes(member.status);
}
