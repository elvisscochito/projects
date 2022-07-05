import dotenv from "dotenv";
dotenv.config();

export const DB = {
    HOST: process.env['DB_HOST'],
    USER: process.env['DB_USER'],
    PASSWORD: process.env['DB_PASSWORD'],
    DATABASE: process.env['DB_DATABASE'],
};

export const API = {
    PORT: process.env['PORT'] ?? 8088,
};
