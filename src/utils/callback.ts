import { Context } from 'telegraf';

const callbackHandler = async (ctx: Context) => {
  if (!ctx.callbackQuery || !('data' in ctx.callbackQuery)) {
    return;
  }

  const callbackData = ctx.callbackQuery.data;

  try {
    await ctx.answerCbQuery();

    switch (callbackData) {
      case 'rules':
        await handleRules(ctx);
        break;

      case 'about':
        await handleAbout(ctx);
        break;

      case 'roadmap':
        await handleRoadmap(ctx);
        break;

      case 'back_to_menu':
        await handleBackToMenu(ctx);
        break;

      default:
        await ctx.answerCbQuery('Noma\'lum buyruq!');
    }
  } catch (error) {
    console.error('Callback handler error:', error);
    await ctx.answerCbQuery('Xatolik yuz berdi!');
  }
};

// Qoidalar bo'limi
async function handleRules(ctx: Context) {
  const rulesText = `
📜 <b>Bot Qoidalari</b>

1️⃣ <b>Umumiy qoidalar:</b>
   • Botdan faqat o'quv maqsadlarida foydalaning
   • Spam va keraksiz xabarlar yubormang
   • Boshqa foydalanuvchilarni hurmat qiling

2️⃣ <b>Foydalanish qoidalari:</b>
   • Har bir buyruq uchun to'g'ri formatdan foydalaning
   • Buyruqlar haqida ko'proq ma'lumot uchun /help dan foydalaning
   
3️⃣ <b>Taqiqlangan harakatlar:</b>
   • Botni buzishga urinish
   • Noto'g'ri ma'lumotlar yuborish
   • Boshqa foydalanuvchilarning ma'lumotlarini o'g'irlash

⚠️ Qoidalarni buzgan holda botdan foydalanish cheklangan bo'lishi mumkin.
  `.trim();

  await ctx.editMessageText(rulesText, {
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [{ text: '◀️ Orqaga', callback_data: 'back_to_menu' }]
      ]
    }
  });
}

// Bot haqida bo'lim
async function handleAbout(ctx: Context) {
  const aboutText = `
ℹ️ <b>Bot Haqida Ma'lumot</b>

🤖 <b>Bot nomi:</b> Xinux Bot
📅 <b>Yaratilgan sana:</b> 2024
👨‍💻 <b>Dasturchi:</b> Xinux Community

<b>Bot imkoniyatlari:</b>
✅ Foydalanuvchilarni boshqarish
✅ Guruh moderatsiyasi
✅ Ogohlantirishlar tizimi
✅ Interaktiv klaviatura
✅ Inline buyruqlar
✅ Va boshqa ko'plab funksiyalar

<b>Texnologiyalar:</b>
• Node.js
• TypeScript
• Telegraf library

📞 <b>Aloqa:</b> @xinux_admin
🌐 <b>Website:</b> xinux.uz
  `.trim();

  await ctx.editMessageText(aboutText, {
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [{ text: '◀️ Orqaga', callback_data: 'back_to_menu' }]
      ]
    }
  });
}

// Roadmap bo'limi
async function handleRoadmap(ctx: Context) {
  const roadmapText = `
🗺 <b>Bot Rivojlanish Rejasi (Roadmap)</b>

<b>✅ Bajarilgan:</b>
• ✓ Asosiy bot strukturasi
• ✓ Foydalanuvchi ro'yxatdan o'tishi
• ✓ Guruh moderatsiya buyruqlari
• ✓ Inline keyboard menu
• ✓ Ogohlantirishlar tizimi

<b>🔄 Hozirda ustida ishlanmoqda:</b>
• ⏳ Ma'lumotlar bazasi integratsiyasi
• ⏳ Admin panel
• ⏳ Statistika moduli
• ⏳ Foydalanuvchi profillari

<b>📋 Rejalashtirilgan:</b>
• 📌 Avtomatik moderatsiya
• 📌 Anti-spam tizimi
• 📌 Ko'p tilli qo'llab-quvvatlash
• 📌 Bildirishnomalar tizimi
• 📌 Fayl menejeri
• 📌 Custom buyruqlar

<b>🎯 Uzoq muddatli rejalar:</b>
• 🎯 AI moderator
• 🎯 Web dashboard
• 🎯 Bot API
• 🎯 Premium funksiyalar

📅 <b>Oxirgi yangilanish:</b> ${new Date().toLocaleDateString('uz-UZ')}
  `.trim();

  await ctx.editMessageText(roadmapText, {
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [{ text: '◀️ Orqaga', callback_data: 'back_to_menu' }]
      ]
    }
  });
}

// Asosiy menyuga qaytish
async function handleBackToMenu(ctx: Context) {
  await ctx.editMessageText(
    `👋 Asosiy menyu\n\nKerakli bo'limni tanlang:`,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: '📜 Qoidalar', callback_data: 'rules' }],
          [{ text: 'ℹ️ Bot haqida', callback_data: 'about' }],
          [{ text: '🗺 Roadmap', callback_data: 'roadmap' }],
        ]
      }
    }
  );
}

export default callbackHandler;