const TABLE = {
    PLAYER: 'player',
}

module.exports = function ({ sql }) {
    function usernameTaken(
        username,
        onTaken,
        onNotTaken,
        onError,
    ) {
        sql.run(
            `SELECT COUNT(*) as count
             FROM ${TABLE.PLAYER} p
             WHERE p.player_name = ?`,
            [username],
            (data) => data[0]['count'] == 0 ?
                onNotTaken() :
                onTaken(),
            onError,
        )
    }

    function persistUser(
        username,
        password,
        email,
        onSuccess,
        onError,
    ) {
        sql.run(
            `INSERT INTO ${TABLE.PLAYER}
             (player_name, player_pw, player_email)
             VALUES (?, ?, ?)`,
            [username, password, email],
            (data) => onSuccess(),
            onError,
        )
    }

    return Object.freeze({
        usernameTaken,
        persistUser,
    });
}
