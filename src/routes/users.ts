const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req: Express.Request, res: any) {
    res.status(200).send('respond with a resource');
});

export default router;
