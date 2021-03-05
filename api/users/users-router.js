const usersRouter = require('express').Router();


usersRouter.get('/', (req, res) => {
    res.status(200).json({error: false, message: 'available endpoints: POST : /register, POST : /login'})
})

usersRouter.post('/register', (req, res) => {
    res.status(201).json({error: false, message: 'post register'})
})

usersRouter.post('/login', (req, res) => {
    res.status(201).json({error: false, message: 'post login'})
})

module.exports = usersRouter;