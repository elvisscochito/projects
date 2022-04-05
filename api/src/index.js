const db = require("./db");
const express = require("express");
const user = require("./endpoints/user");

async function main() {
    //await db.sync();  

    express()
        .use(express.json())
        .post("/user/create", user.create)
        .post("/user/login", user.login)
        .listen(8081, () => console.log("listening..."));
}

main();
