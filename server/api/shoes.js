const router = require('express').Router()
const { shoe } = require('../db')

// GET for /api/shoes/athletic
router.get('/athletic', async (req, res, next) => {
    try {
        res.send(await shoe.findAll({ where: { type: 'athletic' } }))
    } catch (err) {
        next(err)
    }
})

// GET for /api/shoes/casual
router.get('/casual', async (req, res, next) => {
    try {
        res.send(await shoe.findAll({ where: { type: 'casual' } }))
    } catch (err) {
        next(err)
    }
})

// GET for /api/shoes/:id
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        res.send(await shoe.findByPk(id))
    } catch (err) {
        next(err)
    }
})

module.exports = router