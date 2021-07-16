import express from 'express';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import { error, logInfo, logError, AppError } from './utils';
import { handleTestApi } from './routes/testApi';

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const BASE_URL = process.env.BASE_URL || '';
const PORT = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, './public');

const getCorsOptions = () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      origin: process.env.API_BASE_URL,
    };
  }
  return undefined;
};

const init = async (): Promise<void> => {
  const app = express();

  // Security modules

  app.use(
    helmet({
      contentSecurityPolicy: true,
    }),
  );
  app.use(cors(getCorsOptions()));
  app.use(express.json());

  //Serve Static files including the react app static bundle

  app.use(
    BASE_URL,
    express.static(publicPath, {
      index: false,
      maxAge: 30 * 24 * 60 * 3600,
    }),
  );

  app.get('/api/data', handleTestApi);

  // Serve react static bundle

  app.get('/*', (_, res) => {
    res.sendFile(`${publicPath}/index.html`);
  });

  // Test data route

  // Return 404 on all other non specified routes
  app.use((_, __, next) => {
    const err = error('Not Found', 404);
    return next(err);
  });

  // Create 500 errors. and logging
  app.use((err: AppError, _, res, __) => {
    res.status(err.status);
    logError(err);
    if (process.env.DEBUG_SERVER) {
      return res.json({ errMsg: err.appMsg || err.message, stack: err.stack });
    }
    return res.json({ errMsg: err.appMsg || err.message });
  });

  //Start App

  app.listen(PORT, () => {
    if (process.env.NODE_ENV === 'development') {
      logInfo('server started at http://localhost:' + PORT);
    }
  });
};

init();

export default init;
