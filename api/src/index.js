import express from "express";
import cors from "cors";
import debug from "debug";
import {
    Player,
    Event,
    Match,
    EventHistory,
    EventHistory,
    sync,
} from "./data";
import { API } from "./config";
import apiReference from "./api-reference.html";

const ERROR = {
    UNIQUE_CONSTRAINT: "SequelizeUniqueConstraintError",
    FOREIGN_CONSTRAINT: "SequelizeForeignKeyConstraintError",
    INVALID_DATA: "SequelizeValidationError",
};

const MSG = {
    CREATED: "CREATED",
    DELETED: "DELETED",
    NAME_TAKEN: "NAME_TAKEN",
    INVALID_DATA: "INVALID_DATA",
    INVALID_REFERENCE: "INVALID_REFERENCE",
    DB_RESET: "DB_RESET",
    DB_UPDATED: "DB_UPDATED",
    NOT_FOUND: "NOT_FOUND",
};

const logger = debug("api");

debug.enable("api,data");

function errorHandler(res, next) {
    return function (err) {
        switch (err.name) {
            case ERROR.INVALID_DATA:
                return res.json({ status: MSG.INVALID_DATA });
            case ERROR.UNIQUE_CONSTRAINT:
                return res.json({ status: MSG.NAME_TAKEN });
            case ERROR.FOREIGN_CONSTRAINT:
                return res.json({ status: MSG.INVALID_REFERENCE });
            default:
                return next(err);
        }
    }
}

express()
    .use(cors())
    .use(express.json())
    .use((req, res, next) => {
        logger(`${req.method} ${req.url}`);
        next();
    })
    .get("/", (req, res) => res.sendFile(
        /api-reference.*html/.exec(apiReference)[0],
        { root: __dirname }))
    /* PLAYER ENDPOINTS */
    .get("/player", (req, res, next) => {
        Player.findAll({ attributes: ['username'] })
            .then(data => res.json({ data }))
            .catch(next);
    })
    .get("/player/:username", async (req, res, next) => {
        const { username } = req.params;
        Player.findOne({
            where: { username },
            include: [{
                model: EventHistory,
                include: [Match, Event],
            }]
        })
            .then(process)
            .catch(next);

        function process(player) {
            if (!player) return res.json({ status: MSG.NOT_FOUND });
            const { username, email, EventHistories } = player;
            const data = {
                username, email,
                events: EventHistories.map(({ Match, Event }) => ({
                    match: Match.id,
                    event: Event.name,
                    description: Event.description,
                    value: Event.value,
                })),
            };
            res.json({ data });
        }
    })
    .post("/player", (req, res, next) => {
        const { username, email, password } = req.body;
        // TODO: validation
        Player.create({ username, email, password })
            .then(data => res.json({ status: MSG.CREATED }))
            .catch(errorHandler(res, next));
    })
    .delete("/player/:username", (req, res, next) => {
        const { username } = req.params;
        Player.destroy({ where: { username } })
            .then(data => res.json({ status: MSG.DELETED }))
            .catch(next);
    })
    .post("/player/login", (req, res, next) => {
        // TODO
    })
    /* EVENT ENDPOINTS */
    .get("/event", (req, res, next) => {
        Event.findAll({ attributes: ['name', 'description', 'value'] })
            .then(data => res.json({ data }))
            .catch(next);
    })
    .post("/event", (req, res, next) => {
        const { name, description, value } = req.body;
        // TODO: validation
        Event.create({ name, description, value })
            .then(data => res.json({ status: MSG.CREATED }))
            .catch(errorHandler(res, next));
    })
    .delete("/event/:name", (req, res, next) => {
        const { name } = req.params;
        Event.destroy({ where: { name } })
            .then(data => res.json({ status: MSG.DELETED }))
            .catch(next);
    })
    /* MATCH ENDPOINTS */
    .get("/match", (req, res, next) => {
        Match.findAll({ attributes: ['id', 'duration'] })
            .then(data => res.json({ data }))
            .catch(next);
    })
    .get("/match/:id", (req, res, next) => {
        const { id } = req.params;
        Match.findOne({
            where: { id },
            include: [{
                model: EventHistory,
                include: [Player, Event],
            }],
        })
            .then(process)
            .catch(next);

        function process(match) {
            if (!match) return res.json({ status: MSG.NOT_FOUND });
            const data = {
                matchId: match.id,
                events: match.EventHistories.map(ev => ({
                    player: ev.PlayerUsername,
                    event: ev.EventName,
                })),
            };
            res.json({ data });
        }
    })
    .post("/match", async (req, res, next) => {
        const { duration, events } = req.body;
        Match.create({
            duration,
            EventHistories: events.map(({ player, event }) => ({
                PlayerUsername: player,
                EventName: event,
            })),
        }, {
            include: [{
                association: Match.EventHistory,
                include: [EventHistory.Player, EventHistory.Event],
            }],
        })
            .then(_ => res.json({ status: MSG.CREATED }))
            .catch(errorHandler(res, next));
    })
    .delete("/match/:id", (req, res, next) => {
        const { id } = req.params;
        Match.destroy({ where: { id } })
            .then(_ => res.json({ staus: MSG.DELETED }))
            .catch(next);
    })
    /* DATA ENDPOINTS */
    .get("/db/reset", (req, res, next) => {
        sync({ force: true })
            .then(_ => res.json({ status: MSG.DB_RESET }))
            .catch(next);
    })
    .get("/db/update", (req, res, next) => {
        sync({ alter: true })
            .then(_ => res.json({ status: MSG.DB_UPDATED }))
            .catch(next);
    })
    /* ERROR HANDLER */
    .use((err, req, res, next) => {
        console.error(err);
        res.status(500).json({ err: err.message });
    })
    .listen(API.PORT, () => {
        console.log(`listening on '${API.PORT}'`);
    });
