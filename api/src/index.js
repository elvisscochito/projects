import express from "express";
import cors from "cors";
import {
    Player,
    Event,
    Match,
    HistoryEvent,
    HistoryPlayer,
} from "./data";

const ERROR = {
    UNIQUE_CONSTRAINT: "SequelizeUniqueConstraintError",
    INVALID_DATA: "SequelizeValidationError",
};

const MSG = {
    CREATED: "CREATED",
    NAME_TAKEN: "NAME_TAKEN",
    INVALID_DATA: "INVALID_DATA",
};

const PORT = process.env.PORT ?? 8088;

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
    .listen(PORT, () => {
        console.log(`listening on '${PORT}'`);
    });
