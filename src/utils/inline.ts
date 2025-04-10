import { Context } from 'telegraf';
import { InlineQueryResult } from 'telegraf/typings/core/types/typegram';

export const inlineHandler = async (ctx: Context) => {
  const results: InlineQueryResult[] = [
    {
      type: 'article',
      id: '1',
      title: 'Floss haqida',
      input_message_content: {
        message_text: 'Floss — bu o‘zbek dasturchilar hamjamiyati.',
      },
    },
    {
      type: 'article',
      id: '2',
      title: 'Yordam',
      input_message_content: {
        message_text: '/help - buyruqlar ro‘yxati',
      },
    },
  ];

  await ctx.answerInlineQuery(results);
};
