export const mainMenuKeyboard = {
  inline_keyboard: [
    [{ text: '📜 Qoidalar', callback_data: 'rules' }],
    [{ text: 'ℹ️ Bot haqida', callback_data: 'about' }],
    [{ text: '🗺 Roadmap', callback_data: 'roadmap' }],
  ],
};

export const backToMenuKeyboard = {
  inline_keyboard: [
    [{ text: '◀️ Orqaga', callback_data: 'back_to_menu' }]
  ]
};

export const adminKeyboard = {
  inline_keyboard: [
    [{ text: '📊 Statistika', callback_data: 'stats' }],
    [{ text: '👥 Foydalanuvchilar', callback_data: 'users' }],
    [{ text: '⚙️ Sozlamalar', callback_data: 'settings' }],
    [{ text: '◀️ Orqaga', callback_data: 'back_to_menu' }]
  ]
};

export const confirmKeyboard = {
  inline_keyboard: [
    [
      { text: '✅ Ha', callback_data: 'confirm_yes' },
      { text: '❌ Yo\'q', callback_data: 'confirm_no' }
    ]
  ]
};

export const replyMainKeyboard = {
  keyboard: [
    [{ text: '📜 Qoidalar' }],
    [{ text: 'ℹ️ Bot haqida' }],
    [{ text: '🗺 Roadmap' }],
  ],
  resize_keyboard: true,
  one_time_keyboard: false,
};