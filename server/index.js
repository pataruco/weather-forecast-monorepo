import express from 'express';
import bodyParser from 'body-parser';

// middlewares import
import jsonResponseMiddleware from './middleware/json-response-middleware.js';
import loggerMiddleware from './middleware/http-logger-middleware.js';

// Router import
import forecastRouter from './routes/forecast.js';

const PORT = 5000;

const server = express();

// JSON body parser
server.use(bodyParser.json());
server.use(jsonResponseMiddleware);
// Logger
server.use(loggerMiddleware);

// Routes
server.use(forecastRouter);

server.listen(PORT, () => console.log(`Server running on port 📡 ${PORT}`));
