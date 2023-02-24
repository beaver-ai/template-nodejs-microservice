import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';
import compression from 'compression';

import healthRouter from './routes/health';
import infoRouter from './routes/info';
import usersRouter from './routes/users';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

// Special routes which all the microservice should have and should not be removed or disturbed
app.use('/api/v1/info', infoRouter);
app.use('/api/v1/health', healthRouter);

// Microservice routes specific to handler the use case.
// For example, here its users similar it could be payments, profile, publish, cart etc.
app.use('/users', usersRouter);
app.use('/user', usersRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// Error handler
app.use(function (err: any, req: Express.Request, res: any) {
    res.status(err.status || 500).send(err.message);
});

module.exports = app;
