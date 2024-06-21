import express from 'express';


import requestrouter from './router/requestRouter';
const router = express.Router();

router.use('/request',requestrouter)

export default router