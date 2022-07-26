import express from 'express';

import Article from './../models/article.js';

const router = express.Router();

router.get('/new', (req, res) => {
    /** @note complete new blank article from the model (so fill previous params it's not a problem anymore when it's still not created) */
    res.render('articles/new', {article: new Article()});
});

router.get('/edit/:id', async (req, res) => {
    const article = await Article.findById(req.params.id);
    /** @note go to new ejs view to edit article */
    res.render('articles/edit', {article: article});
});

/** @note default id from MongoDB/mongoose (change to slug in order to enhance the url route) */
router.get('/:slug', async (req, res) => {
    /** @note search article by id it's (async), change to findOne (each one instead of find which is an array) */
    const article = await Article.findOne/* findById */({slug: req.params.slug/* req.params.id */});
    if (article == null) {
        res.status(404).send('The article with the given ID was not found.');
        /** @note go back to main page */
        res.redirect('/');
    } else {
        console.log(`Article with id: ${req.params.id} was found`);
        /** @note go back to main page */
        res.render('articles/show', {article: article});
    }
});

/** @note old method */
/* router.post('/', async (req, res) => { */
    /** @note article props can be overridden*/
    /* let article = new Article ({ */
        /** @note access data from the view ejs form name attribute */
        /* title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    });
    try { */
        /** @note async function */
        /* article = await article.save();
        res.redirect(`/articles/${article.slug */ /* id */ /* }`);
    } catch (error) {
        console.warn(error);

        res.render('articles/new', {article: article});
    };
}); */

/** @note new method with function implemented */
router.post('/', (req, res, next) => {
    /** @note create a new blank article, saving it into the request and pass it to the function */
    req.article = new Article();

    /** @note go ahead an continue with the function */
    next();

    /** @note go to the function and pass the route as a path to go to that route */
}, saveArticleAndRedirect('new')); 

router.put('/:id', async (req, res, next) => {
    req.article = await Article.findById(req.params.id);
    next();
}, saveArticleAndRedirect('edit'));

/** @note delete older blogs before slug implementation */
router.delete('/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.redirect('/home');
});

/** @note put and post methods are almost identical so it's implemented as an single function to work in both cases with and path for the route, it's a middleware basically */
function saveArticleAndRedirect(path) {
    return async (req, res) => {
        /** @note it will get the article from the request instead of creating a new article like in the older method */
        let article = req.article;

        /** @note fill from previous article request attributes instead of starting a new one */
        article.title = req.body.title;
        article.description = req.body.description;
        article.markdown = req.body.markdown;
        try {
            /** @note async function */
            article = await article.save();
            res.redirect(`/articles/${article.slug/* id */}`);
        } catch (error) {
            console.warn(error);
            res.render(`articles/${path}`, {article: article});
        };
    };
};

export default router;
