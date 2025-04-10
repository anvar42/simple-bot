import { Context } from 'telegraf';

export const handleTriggers = async (ctx: Context) => {
  const message = ctx.message;

  if (!message || !('text' in message) || typeof message.text !== 'string') {
    return;
  }

  const text = message.text.toLowerCase();

  if (text.includes('salom')) {
    await ctx.reply('👋 Salom!');
  }

  // So'kinish filtr
  const badWords = ['so‘kindi1', 'so‘kindi2'];
  if (badWords.some(word => text.includes(word))) {
    await ctx.deleteMessage();
    await ctx.reply('❌ So‘kinish mumkin emas.');
  }
};