const db = require("../db");

const RESULT = {
    INVALID_BODY: "INVALID_BODY",
    INVALID_STRING: "INVALID_STRING",
    USERNAME_TAKEN: "USERNAME_TAKEN",
    USER_CREATED: "USER_CREATED",
};

function finish({ req, next, code, data }) {
    req.code = code;
    req.data = data;
    next(new Error("FINISH"));
}

function validateBody(req, res, next) {
    const { body } = req;
    if (!body) return finish({ req, next, code: RESULT.INVALID_BODY });
    next();
}

function validateString(field) {
    return function (req, res, next) {
        const item = req.body[field];
        if (!item || typeof item !== "string")
            return finish({ req, next, code: RESULT.INVALID_STRING, data: { field }});
        next();
    }
}

function checkUsernameValid(req, res, next) {
    const { username } = req.body;
    db.Player.findAll({
        where: {
            name: username
        },
    })
        .then(rows => {
            if (rows.length == 0) next();
            else finish({ req, next, code: RESULT.USERNAME_TAKEN });
        })
        .catch(next);
}

function persistUser(req, res, next) {
    const { username, email, password } = req.body;
    db.Player.create({
        name: username,
        email,
        password,
    })
        .then(() => finish({ req, next, code: RESULT.USER_CREATED }))
        .catch(next);
}

function loginUser(req, res, next) {
    next(new Error("UNIMPLEMENTED"));
}

function handler(err, req, res, next) {
    if (err.message !== "FINISH") {
        req.code = "UNHANDLED_EXCEPTION";
    }

    switch (req.code) {
    case RESULT.USERNAME_TAKEN:
        return res.status(200).json({ status: "TAKEN" });
    case RESULT.USER_CREATED:
        return res.status(200).json({ status: "CREATED" });
    case RESULT.INVALID_BODY:
    case RESULT.INVALID_STRING:
        return res.status(400).send('Bad client data');
    default:
        console.error('Unhandled server exception: ', err);
        return res.status(500).send(req.code);
    }
}

module.exports = {
    create: [
        validateBody,
        validateString("username"),
        validateString("email"),
        validateString("password"),
        checkUsernameValid,
        persistUser,
        handler,
    ],
    login: [
        validateBody,
        validateString("username"),
        validateString("password"),
        loginUser,
        handler,
    ],
};
