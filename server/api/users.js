const router = require('express').Router()
const { user } = require('../db')

// GET for /api/users/:id
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        res.send(await user.findByPk(id))
    } catch (err) {
        next(err)
    }
})

// PUT for /api/users/:id
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateAccount = await user.findByPk(id);
        res.send(await updateAccount.update(req.body));
    } catch (err) {
        next(err)
    }
})

// POST for /api/users
router.post('/', async (req, res, next) => {
    try {
        res.send(await user.create(req.body))
    } catch (err) {
        next(err)
    }
})

module.exports = router