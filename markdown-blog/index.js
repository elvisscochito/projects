import express from 'express';
import {PORT} from './helpers/config.js';

import mongoose from 'mongoose';
import methodOverride from 'method-override';

import articleRouter from './routes/articles.js';
import Article from './models/article.js';
import './helpers/mongodb-config.js';

const hostname = process.env.HOSTNAME || 'localhost';
/** @note selected via .env/config. files */
/* const port = process.env.PORT || 3000; */
const server = express();

/** @note connected via database file */
/* mongoose.connect('mongodb://localhost/markdown-blog'); */

server.set('port', PORT);
server.set('hostname', hostname);
server.set('view engine', 'ejs');

server.use(express.urlencoded({ extended: false }));
/** @note overload the method of the form */
server.use(methodOverride('_method'));

server.get('/', (req, res) => {
    res.send("Hello vercel");
});

server.get('/home', async (req, res) => {
    /* const articles = [
        {
            title: "Test article",
            date: new Date(),
            description: "Test description"
        },
        {
            title: "Test article 2",
            date: new Date(),
            description: "Test description 2"
        }
    ]; */

    const articles = await Article.find().sort({date: 'desc'});
    res.render('articles/index.ejs', {articles});
});

server.use('/articles', articleRouter);

server.listen(server.get('port'), () => {
    console.log(`Server running at http://${server.get('hostname')}:${server.get('port')}/`);
});
