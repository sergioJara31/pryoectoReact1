
const express = require('express');
const userRouter = require('./user');
const routerChampion = require('./champion');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', userRouter);
  router.use('/Champions', routerChampion);
}




module.exports = routerApi;