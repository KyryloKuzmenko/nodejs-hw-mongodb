import express from 'express';
import pino, { pinoHttp } from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config();

export const setupServer = () => {
    const app = express();

    app.use(cors());
    app.use(pinoHttp());

    app.use((req, res) => {
        res.status(404).json({
            message: 'Not found'
        });
    });

    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};