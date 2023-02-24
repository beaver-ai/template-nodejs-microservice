const express = require('express');
const router = express.Router();

router.get('/', function (req: Express.Request, res: any) {
    res.status(200).send('info');
});

export default router;
