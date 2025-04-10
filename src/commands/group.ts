import { Context } from 'telegraf';

export default async function groupCommand(ctx: Context) {
  await ctx.reply(
    `📌 Xinux guruhlari:\n\n` +
    `• Linux - @xinux_linux\n` +
    `• DevOps - @xinux_devops\n` +
    `• Go - @xinux_go\n` +
    `• Rust - @xinux_rust\n` +
    `• Frontend - @xinux_frontend`
  );
}
