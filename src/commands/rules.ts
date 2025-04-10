import { Context } from 'telegraf';

export default async function rulesCommand(ctx: Context) {
  await ctx.reply(
    `📌 Telegram guruhlar:\n\n` +
    `• Linux - @linux\n` +
    `• DevOps - @devops\n` +
    `• Go - @go\n` +
    `• Rust - @rust\n` +
    `• Frontend - @frontend`
  );
}
