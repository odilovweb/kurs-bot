const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

const bot = new Telegraf("7387830728:AAHNdEInJnRo22Rg80KcnAOttzWtOKDJ4ec");

bot.start(async (ctx) => {
  try {
    await ctx.reply(
      `
Assalomu alaykum botga hush kelibsiz !

Ushbu bot orqali kurslarimizga to'lov qilishingiz va batafsil ma'lumot olishingiz mumkin !

O'zingizga kerakli tugmani bosing 👇
`,
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Kurslar ro'yhati 🧾", callback_data: "courses" }],
            [{ text: "To'lov qilish 💳", callback_data: "pay" }],
          ],
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
});

bot.on("callback_query", async (ctx) => {
  if (ctx.callbackQuery.data == "courses") {
    try {
      ctx.telegram.sendMessage(ctx.chat.id, "Kurslarimiz ro'yhati 👇", {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Yangi Airdropchilar 💰",
                callback_data: "airdropchilar",
              },
            ],
          ],
        },
      });
    } catch (e) {
      console.log(e);
    }
  } else if (ctx.callbackQuery.data == "pay") {
    try {
      ctx.telegram.sendMessage(
        ctx.chat.id,
        `
Hozirda qabul ochiq kurslar: 

1️⃣ Yangi Airdropchilar - narxi 300 ming

To'lov uchun: 
Karta raqami : 9860120171156918
`,
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: "To'lov qildim ✅", callback_data: "paid" }],
            ],
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  } else if (ctx.callbackQuery.data == "airdropchilar") {
    try {
      ctx.telegram.sendMessage(
        ctx.chat.id,
        `
Yangi Airdropchilar kursida: 

1. 0 dan o'rgatamiz , hech narsani bilmasangiz ham bu kursga qo'shila olasiz.
2. Crypto va Airdroplar uchun kerakli barcha ilova va manbalar beriladi.
3. Darslar jonli efirda bo'ladi.
4. Notcoin va shunga o'xshagan o'yinlarni qanday qilib tezroq kuchaytirish o'rgatiladi.
5. Notcoin va shunga o'xshagan o'yinlarning tangalarini eng qimmat narxda qiynalmasdan 3 daqiqada birja orqali sotish o'rgatiladi.
6. Community bo'ladi , barcha kursga qo'shilganlar uchun umumiy chat guruh bo'ladi.
7. Darslar yozib olinadi va xohlagan paytingiz ko'rsangiz bo'ladi.
8. Tushunmagan barcha narsalaringiz tushuntiriladi.
9. Telegramdan tashqari boshqa airdroplarda qatnashish o'rgatiladi.

Ushbu kursimizni tugatganingizdan so'ng , 1 so'm sarflamasdan bemalol daromad qila olasiz. 

Ushbu kursimiz narxi 3 oyga atiga - 300 ming so'm.
Biz sizga beradigan bilimimizga 100% kafolat beramiz 💯
`,
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: "To'lov qilish ✅", callback_data: "pay" }],
            ],
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  } else if (ctx.callbackQuery.data == "paid") {
    try {
      ctx.telegram.sendMessage(
        ctx.chat.id,
        `
To'lov chekini adminga yuboring. Va sizni 24 soat ichida kursga qo'shadi ⌚
`,
        {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Chekni yuborish ",
                  url: "https://t.me/OneDrop_admin",
                },
              ],
            ],
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
});

bot.launch();
