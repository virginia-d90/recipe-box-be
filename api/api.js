const apiRouter = require('express').Router();
const usersRouter = require('./users/users-router');
const recipesRouter = require('./recipes/recipes-router');

apiRouter.use('/users', usersRouter);
apiRouter.use('/recipes', recipesRouter);

apiRouter.get('/', (req, res) => {
    res.status(200).json({message: "available endpoints: recipes, users", error: false})
});

module.exports = apiRouter