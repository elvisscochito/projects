import express from "express";
import cors from "cors";
import {
    Player,
    Event,
    Match,
    HistoryEvent,
    HistoryPlayer,
} from "./data";
import apiReference from "./api-reference.html";

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
 * [*] POST /player : create
 * [*] GET /player : get all
 * [ ] GET /player/:name : get all player info
 * [ ] POST /player/login : login
 * [ ] DELETE /player/:name : delete player and all player data
 * EVENT
 * [*] POST /event : create
 * [*] GET /event : get all
 * [ ] DELETE /event/:name : delete event and all references
 * MATCH
 * [ ] POST /match : create match from list of game events [("ed", "WIN"), ...]
 * [ ] GET /match : get all matches
 * [ ] GET /match/:id : get all match info
 * [ ] DELETE /match:id : delete match and all references
 * 
 * TODO: data validation
 */

express()
    .use(cors())
    .use(express.json())
    .get("/", (req, res) => res.sendFile(
        /api-reference.*html/.exec(apiReference)[0],
        { root: __dirname }))
    /* PLAYER ENDPOINTS */
    .get("/player", (req, res, next) => {
        Player.findAll()
            .then(data => res.json({ data }))
            .catch(next);
    })
    .get("/player/:username", (req, res, next) => {
        // TODO
    })
    .post("/player", (req, res, next) => {
        const { username, email, password } = req.body;
        // TODO: validation
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
    .delete("/player/:username", (req, res, next) => {
        // TODO
    })
    .post("/player/login", (req, res, next) => {
        // TODO
    })
    /* EVENT ENDPOINTS */
    .get("/event", (req, res, next) => {
        Event.findAll()
            .then(data => res.json({ data }))
            .catch(next);
    })
    .post("/event", (req, res, next) => {
        const { name, value } = req.body;
        // TODO: validation
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
    .delete("/event/:name", (req, res, next) => {
        // TODO
    })
    /* MATCH ENDPOINTS */
    .get("/match", (req, res, next) => {
        Match.findAll()
            .then(data => res.json({ data }))
            .catch(next);
    })
    .get("/match:id", (req, res, next) => {
        // TODO
    })
    .post("/match", (req, res, next) => {
        // TODO
    })
    .delete("/match/:id", (req, res, next) => {
        // TODO
    })
    /* ERROR HANDLER */
    .use((err, req, res, next) => {
        console.error(err);
        res.status(500).json({ err: err.message });
    })
    .listen(PORT, () => {
        console.log({ apiReference });
        console.log(`listening on '${PORT}'`);
    });
