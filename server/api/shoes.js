const router = require('express').Router()
const { shoe } = require('../db')

//Get all shoes
router.get('/', async (req, res, next) => {
    try {
        res.send(await shoe.findAll())
    } catch (err) {
        next(err)
    }
})

// GET for /api/shoes/athletic
router.get('/athletic', async (req, res, next) => {
    try {
        res.send(await shoe.findAll({ where: { type: 'athletic' } }))
    } catch (err) {
        next(err)
    }
})
router.post('/', async (req, res, next) => {
    try {
        const body= req.body
        console.log(body)
        const added= await shoe.create(body)
        // res.send(added)
    } catch (err) {
        console.log(err)
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

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        console.log(id, "$$$$$$$")
        // const deleteShoe = await shoe.findByPk(id)
        // res.send(await deleteShoe.destroy())
    } catch (err) {
        next(err)
    }
})

module.exports = router