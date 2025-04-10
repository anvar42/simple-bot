import 'dotenv/config';

export function appConfig() {
    const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    if (!TOKEN) {
        throw new Error("TELEGRAM_BOT_TOKEN is not defined");
    }
    return {
        TOKEN,
    };
}