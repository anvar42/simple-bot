import { Context } from 'telegraf';

export default async function roadmapCommand(ctx: Context) {
  await ctx.reply(
    `🚀 Yo'l xaritasi:\n` +
    `1. Linux\n2. Git\n3. Tarmoq\n4. Dasturlash\n5. Real loyihalar`
  );
}
