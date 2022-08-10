import express from 'express';
import loadApp from './loaders';

const createApp = () => {
  const app = express();

  loadApp(app);

  return app;
};

export default createApp;
