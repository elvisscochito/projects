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
    INVALID_DATA: "SequelizeValidationError",
};

const MSG = {
    CREATED: "CREATED",
    DELETED: "DELETED",
    NAME_TAKEN: "NAME_TAKEN",
    INVALID_DATA: "INVALID_DATA",
    DB_RESET: "DB_RESET",
    DB_UPDATED: "DB_UPDATED",
    NOT_FOUND: "NOT_FOUND",
};

const logger = debug("api");

debug.enable("api,data");

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
            .then(({ username, email, EventHistories }) => ({
                username, email,
                events: EventHistories.map(({ Match, Event }) => ({
                    match: Match.id,
                    event: Event.name,
                    description: Event.description,
                    value: Event.value,
                })),
            }))
            .then(data => res.json({ data }))
            .catch(next);
    })
    .post("/player", (req, res, next) => {
        const { username, email, password } = req.body;
        // TODO: validation
        Player.create({ username, email, password })
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
    .delete("/player/:username", (req, res, next) => {
        const { username } = req.params;
        Player.destroy({ where: username })
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
    .delete("/event/:name", (req, res, next) => {
        const { name } = req.params;
        Event.destroy({ where: name })
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
            .then(match => ({
                matchId: match.id,
                events: match.EventHistories.map(ev => ({
                    player: ev.PlayerUsername,
                    event: ev.EventName,
                })),
            }))
            .then(data => res.json({ data }))
            .catch(next);
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
            .then(data => res.json({ status: MSG.CREATED }))
            .catch(next);
    })
    .delete("/match/:id", (req, res, next) => {
        const { id } = req.params;
        Match.destroy({ where: id })
            .then(data => res.json({ staus: MSG.DELETED }))
            .catch(next);
    })
    /* DATA ENDPOINTS */
    .get("/db/reset", (req, res, next) => {
        sync({ force: true })
            .then(data => res.json({ status: MSG.DB_RESET }))
            .catch(next);
    })
    .get("/db/update", (req, res, next) => {
        sync({ alter: true })
            .then(data => res.json({ status: MSG.DB_UPDATED }))
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
