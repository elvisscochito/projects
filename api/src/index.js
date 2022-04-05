const db = require("./db");

async function main() {
    await db.sync();
    db.Player.create({ name: 'ed', email: 'ed@email.com', password: 'password' })
        .then(i => { console.log(`generated id: ${i.id}`)})
        .catch(e => { console.error('error: ', e)});    
}

main();
