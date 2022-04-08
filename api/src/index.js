import express from "express";
import cors from "cors";
import { Sequelize, DataTypes } from "sequelize";
import req from "express/lib/request";

const sequelize = new Sequelize('mysql://admin:Q82s594NmN4muuUWimXf@database-1.czfng6b4q5va.us-east-1.rds.amazonaws.com/metaverse_new');

const ERROR = {
    UNIQUE_CONSTRAINT: "SequelizeUniqueConstraintError",
    INVALID_DATA: "SequelizeValidationError",
};

const MSG = {
    CREATED: "CREATED",
    NAME_TAKEN: "NAME_TAKEN",
    INVALID_DATA: "INVALID_DATA",
};

const Player = sequelize.define('Player', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(128), allowNull: false },
    email: { type: DataTypes.STRING(128), allowNull: false },
    password: { type: DataTypes.STRING(128), allowNull: false },
}, { tableName: 'player' });

const Event = sequelize.define('Event', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(256), allowNull: false, unique: true },
    value: { type: DataTypes.INTEGER, allowNull: true }
}, { tableName: 'event' });

const Match = sequelize.define('Match', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    duration: { type: DataTypes.INTEGER, allowNull: true },
}, { tableName: 'match' });

const HistoryEvent = sequelize.define('HistoryEvent', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    player_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Player, key: 'id' } },
    match_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Match, key: 'id' } },
    event_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Event, key: 'id' } },
}, { tableName: "history_event" });

const HistoryPlayer = sequelize.define("HistoryPlayer", {
    player_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, references: { model: Player, key: 'id' } },
    match_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, references: { model: Match, key: 'id' } },
}, { tableName: "history_player" });

/*
 * PLAYER
 * [*] PUT /player : create
 * [*] GET /player : get all
 * [ ] POST /player : login
 * EVENT
 * [*] PUT /event : create
 * [*] GET /event : get all
 * MATCH
 * [ ] PUT /match : create match from list of game events [("ed", "WIN"), ...]
 * [ ] GET /match : get all matches with all info
 * HISTORY-EVENT
 * HISTORY-PLAYER
 */

express()
    .use(cors())
    .use(express.json())
    .get("/", (req, res) => res.send("hello"))
    .get("/player", (req, res, next) => {
        Player.findAll()
            .then(data => res.json({ data }))
            .catch(next);
    })
    .put("/player", (req, res, next) => {
        const { username, email, password } = req.body;
        Player.create({ name: username, email, password })
            .then(data => res.json({ status: MSG.CREATED }))
            .catch(err => {
                switch (err.name) {
                    case ERROR.INVALID_DATA:
                        return res.json({ status: MSG.INVALID_DATA });
                    case ERROR.UNIQUE_CONSTRAINT:
                        return res.json({ status: MSG.NAME_TAKEN });
                    default:
                        return next(err);
                }
            })
    })
    .get("/event", (req, res, next) => {
        Event.findAll()
            .then(data => res.json({ data }))
            .catch(next);
    })
    .put("/event", (req, res, next) => {
        const { name, value } = req.body;
        Event.create({ name, value })
            .then(data => res.json({ status: MSG.CREATED }))
            .catch(err => {
                switch (err.name) {
                    case ERROR.INVALID_DATA:
                        return res.json({ status: MSG.INVALID_DATA });
                    case ERROR.UNIQUE_CONSTRAINT:
                        return res.json({ status: MSG.NAME_TAKEN });
                    default:
                        return next(err);
                }
            });
    })
    .put("/match", async (req, res, next) => {
        // [{ player: "ed", event: "win"}, ...]
        const { events } = req.body;
        Player.findAllevents.map(e => e.player)
    })
    .use((err, req, res, next) => {
        console.error(err);
        res.status(500).json({ err: err.message });
    })
    .listen(4567, () => console.log("listening"));
