import mongoose from "mongoose";

import {marked} from 'marked';
import slugify from 'slugify';
import createDomPurify from 'dompurify';
import {JSDOM} from 'jsdom';

/** @note domPurify sanitize html and then JSOM is a way for render html inside node.js because node.js don't know how html works by it own */
const domPurify = createDomPurify(new JSDOM().window);

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    markdown: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        /** @note can't be more than one title with the same name, it's declared in the database because in this way it cannot be calculated every single time just once */
        unique: true
    },
    sanitizedHTML: {
        type: String,
        required: true
    }
});

/** @note automatically calculate slog every time that the article is updated/saved */
articleSchema.pre('validate', function(next) {
    /** @note set to lowercase and remove weird characters to really looking good url */
    if (this.title) {
        this.slug = slugify(this.title, {lower: true, strict: true});
    }

    /** @note convert markdown to sanitized HTML with that already markdown field */
    if (this.markdown) {
        /** @note what this does is convert markdown to html, and then get rid of any malicious code */
        this.sanitizedHTML = domPurify.sanitize(marked(this.markdown));
    }

    next();
});

export default mongoose.model("Article", articleSchema);
