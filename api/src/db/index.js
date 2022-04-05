const { Sequelize } = require("sequelize");
const CONFIG = require("./config");
const PLAYER = require("./t_player");
const EVENT = require("./t_event");
const MATCH = require("./t_match");
const MK_HISTORY_EVENT = require("./t_history_event");
const MK_HISTORY_PLAYER = require("./t_history_player");

const URL = `mysql://${CONFIG.USER}:${CONFIG.PASSWORD}@${CONFIG.HOST}:${CONFIG.PORT}/${CONFIG.DATABASE}`;
const sequelize = new Sequelize(URL);

const Player = sequelize.define('Player', PLAYER.fields, PLAYER.options);
const Event = sequelize.define('Event', EVENT.fields, EVENT.options);
const Match = sequelize.define('Match', MATCH.fields, MATCH.options);
const HISTORY_EVENT = MK_HISTORY_EVENT({ Player, Match, Event });
const HistoryEvent = sequelize.define('HistoryEvent', HISTORY_EVENT.fields, HISTORY_EVENT.options);
const HISTORY_PLAYER = MK_HISTORY_PLAYER({ Player, Match });
const HistoryPlayer = sequelize.define('HistoryPlayer', HISTORY_PLAYER.fields, HISTORY_PLAYER.options);

module.exports = {
    Player,
    Event,
    Match,
    HistoryEvent,
    HistoryPlayer,
    sync: function () {
        return sequelize.sync({ alter: true });
    },
};
