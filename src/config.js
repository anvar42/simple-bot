"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = appConfig;
require("dotenv/config");
function appConfig() {
    var TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    if (!TOKEN) {
        throw new Error("TELEGRAM_BOT_TOKEN is not defined");
    }
    return {
        TOKEN: TOKEN,
    };
}
