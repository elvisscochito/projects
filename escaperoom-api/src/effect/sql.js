module.exports = function ({ mysql }) {
    const pool = mysql.createPool({
        connectionLimit: 10,
        host: "host.docker.internal",
        user: "root",
        password: "password",
        database: "metaverse",
    });

    function run(sql, values, onSuccess, onError) {
        pool.query(sql, values, function (err, results, _fields) {
            if (err) return onError(err);
            console.log("DB QUERY:");
            console.log({ sql, values, results });
            onSuccess(results);
        });
    }

    return Object.freeze({ run });
}