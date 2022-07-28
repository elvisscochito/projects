import mongoose from 'mongoose';
/* import {connect} from 'mongoose'; */
import {MONGODB_URI} from './config.js';

(async () => {
    try {
        const db = await mongoose.connect(MONGODB_URI);
        console.info(`MongoDB connected to ${db.connection.name} database`);
    } catch (error) {
        console.error(error);
    }
})();
