import { Injectable } from '@nestjs/common';
import { Ctx, Help, InjectBot, Start, Update } from 'nestjs-telegraf';
import { TelegrafContext } from 'src/interfaces/context.interface';
import { Telegraf } from 'telegraf';

@Injectable()
@Update()
export class TelegrammService {
  constructor(@InjectBot() private bot: Telegraf<TelegrafContext>) {}
  @Start()
  async start(@Ctx() ctx: TelegrafContext) {
    await ctx.reply(
      'Здравствуй! Я бот, присылаю уведомления о поступлении новых заказов',
    );
  }

  @Help()
  async onHelp(): Promise<string> {
    return 'Возникли вопросы? Свяжитесь с разработчиком';
  }

  // @On('text')
  // async onMessage(@Ctx() ctx: TelegrafContext) {
  //   if (ctx.message.from.is_bot) {
  //     await ctx.reply('permission failed');
  //   }

  //   try {
  //     await ctx.reply(`${ctx}`);
  //     console.log(ctx.update);
  //     await ctx.replyWithHTML('Поступил новый заказ');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  async sendMessage(chatId: number, message: string): Promise<void> {
    await this.bot.telegram.sendMessage(
      chatId,
      `📞🔔 Поступил запрос на звонок сайта! 🚀
      💼 Клиент уже ждёт... 👉🏻💦   🏎️
      ${message}`,
    );
  }
}
