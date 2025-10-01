import { Context } from 'telegraf';
import { mainMenuKeyboard } from '../utils/keyboard';

export const startCommand = async (ctx: Context) => {
  const firstName = ctx.from?.first_name || 'Foydalanuvchi';
  
  const welcomeText = `
👋 Salom ${firstName}, Xinux botga xush kelibsiz!

Bu bot orqali siz quyidagilarni amalga oshirishingiz mumkin:

📜 Qoidalar bilan tanishish
ℹ️ Bot haqida ma'lumot olish
🗺 Rivojlanish rejasini ko'rish
📚 Yordam olish (/help)

Kerakli bo'limni tanlang:
  `.trim();

  await ctx.reply(welcomeText, { 
    reply_markup: mainMenuKeyboard,
    parse_mode: 'Markdown'
  });
};
