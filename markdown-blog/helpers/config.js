import {config} from 'dotenv';

config();
/* console.log(process.env.MONGODB_URI); */
/* select connection */
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/markdown-blog';

export const PORT = process.env.PORT || 3000;
