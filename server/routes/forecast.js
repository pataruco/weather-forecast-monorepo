import express from 'express';
import { getForecastByLocationName } from '../controllers/forecast.js';

const forecastRouter = express.Router();

forecastRouter.get('/forecast', getForecastByLocationName);

export default forecastRouter;
