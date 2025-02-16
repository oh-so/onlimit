import express from 'express';

const router = express.Router();

router.get('/example', async (req, res) => {
  res.json('Hello World!');
});

export default router;
