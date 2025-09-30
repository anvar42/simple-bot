"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
exports.default = default_1;
var start_1 = require("./commands/start");
var about_1 = require("./commands/about");
var check_1 = require("./commands/check");
var help_1 = require("./commands/help");
var roadmap_1 = require("./commands/roadmap");
var rules_1 = require("./commands/rules");
var warn_1 = require("./commands/warn");
var inline_1 = require("./utils/inline");
var callback_1 = require("./utils/callback");
var rules_2 = require("./commands/rules");
var Command;
(function (Command) {
    Command["Start"] = "start";
    Command["Help"] = "help";
    Command["Group"] = "group";
    Command["Roadmap"] = "roadmap";
    Command["Warn"] = "warn";
    Command["Rules"] = "rules";
    Command["About"] = "about";
    Command["Check"] = "check";
})(Command || (exports.Command = Command = {}));
function default_1(bot) {
    bot.start(start_1.startCommand);
    bot.help(help_1.default);
    bot.command(Command.Group, rules_1.default);
    bot.command(Command.Roadmap, roadmap_1.default);
    bot.command(Command.Warn, warn_1.default);
    bot.command(Command.Rules, rules_2.default);
    bot.command(Command.About, about_1.default);
    bot.command(Command.Check, check_1.default);
    bot.on('inline_query', inline_1.inlineHandler);
    bot.on('callback_query', callback_1.default);
}
