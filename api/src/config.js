import dotenv from "dotenv";
dotenv.config();

export const DB = {
    HOST: process.env['DB_HOST'],
    USER: process.env['DB_HOST'],
    PASSWORD: process.env['DB_HOST'],
    DATABASE: process.env['DB_HOST'],
};

export const API = {
    PORT: process.env['PORT'] ?? 8088,
};
