import logger from '../lib/logger.js';

const httpLoggerMiddleware = async (request, response, next) => {
  const { method, url, hostname, body } = request;
  const { statusCode, statusMessage } = response;
  logger.info({ request: { method, url, hostname, body } });
  logger.info({ response: { url, statusCode, statusMessage } });
  next();
};

export default httpLoggerMiddleware;
