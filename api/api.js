const apiRouter = require('express').Router();
const usersRouter = require('./users/users-router');

apiRouter.use('/users', usersRouter);

apiRouter.get('/', (req, res) => {
    res.status(200).json({message: "available endpoints: recipes, users", error: false})
});

module.exports = apiRouter