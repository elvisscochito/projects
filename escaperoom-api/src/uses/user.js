const ERROR = {
    NO_BODY: "NO_BODY",
    INVALID_USERNAME: "INVALID_USERNAME",
    INVALID_PASSWORD: "INVALID_PASSWORD",
    INVALID_EMAIL: "INVALID_EMAIL",
    USER_PERSIST_FAILURE: "USER_PERSIST_FAILURE",
    INVALID_RESULT: "INVALID_RESULT",
    USER_LOOKUP_ERROR: "USER_LOOKUP_ERROR",
};

const RESULT = {
    USERNAME_TAKEN: "USERNAME_TAKEN",
    USER_PERSISTED: "USER_PERSISTED",
};

module.exports = function ({ handlers, usernameTaken, persistUser }) {
    function validate(req, _res, next) {
        const { fail } = handlers(req, next);
        const { body } = req;

        if (!body) return fail(ERROR.NO_BODY);
        const { username, password, email } = body;

        const valid = item => (item && typeof item === "string");
        if (!valid(username)) return fail(ERROR.INVALID_USERNAME);
        if (!valid(password)) return fail(ERROR.INVALID_PASSWORD);
        if (!valid(email)) return fail(ERROR.INVALID_EMAIL);

        // TODO: validate length and format
        next();
    }

    function create(req, res, next) {
        const { finish, fail } = handlers(req, next);
        const { username, password, email } = req.body;

        usernameTaken(
            username,
            () => { finish(RESULT.USERNAME_TAKEN) },
            () => persistUser(
                username, password, email,
                () => { finish(RESULT.USER_PERSISTED) },
                (err) => { fail(ERROR.USER_PERSIST_FAILURE, err) },
            ),
            (err) => { fail(ERROR.USER_LOOKUP_ERROR, err) },
        );
    }

    function controller(req, res, next) {
        const { fail } = handlers(req, next);

        switch (req.code) {
        case RESULT.USERNAME_TAKEN:
            return res.json({ status: "USERNAME_TAKEN" });
        case RESULT.USER_PERSISTED:
            return res.json({ status: "SUCCESS" });
        default:
            return fail(ERROR.INVALID_RESULT);
        }
    }

    function error_controller(err, req, res, next) {
        console.warn({ msg: "error_controller", code: req.code, err });
        const json = { code: req.code, err };
        switch (req.code) {
        case ERROR.NO_BODY:
        case ERROR.INVALID_USERNAME:
        case ERROR.INVALID_PASSWORD:
            return res.status(400).json(json);
        case ERROR.INVALID_RESULT:
        case ERROR.USER_PERSIST_FAILURE:
        case ERROR.USER_LOOKUP_ERROR:
        default:
            return res.status(500).json(json);
        }
    }

    return Object.freeze({
        create,
        validate,
        controller,
        error_controller,
    });
}
