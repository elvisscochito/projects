const express = require("express");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");

/*
 * API - comun
 * - login
 *   - crear cuenta
 *   - iniciar sesion 
 * API - web
 * - jugador
 *   - puntuacion total
 *   - puntuacion por partida
 * - eventos
 *   - buscar eventos de jugador
 *   - buscar eventos de partida
 *   - buscar eventos de partida y jugador
 * - historia
 *   - ver todas partidas
 *   - ver partidas de jugador
 *   - ver partidas en lapso de tiempo
 * API - juego
 * - eventos
 *   - crear nuevo tipo de eventos
 *     - incluye:
 *       nombre
 *       puntuacion
 * - historia
 *   - crear nueva historia en el registro
 *     - incluye:
 *       jugadores
 *       tiempo total
 *       tiempo partida
 *       eventos
 */

function handlers(req, next) {
    function finish(code) {
        req.code = code;
        next();
    }

    function fail(code, err) {
        req.code = code;
        const ex = err ?? new Error(code);
        next(ex);
    }

    return Object.freeze({ finish, fail });
}

const sql = require("./effect/sql")({ mysql });

const db = require("./effect/db")({ sql });

const user = require("./uses/user")({
    handlers,
    usernameTaken: db.usernameTaken,
    persistUser: db.persistUser,
});

express()
    .use(express.json())
    .post("/user/create", [
        user.validate,
        user.create,
        user.controller,
        user.error_controller,
    ])
    .listen(8080, () => console.log(`listening on ${8080}`));
