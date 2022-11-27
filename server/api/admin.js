const router = require('express').Router()
const { shoe } = require('../db')

// POST for /api/admin
router.post('/', async (req, res, next) => {
    try {
        res.send(await shoe.create(req.body))
    } catch (err) {
        next(err)
    }
})

// PUT for /api/admin/:id
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const updateShoe = await shoe.findByPk(id)
        res.send(await updateShoe.update(req.body))
    } catch (err) {
        next(err)
    }
})

// DELETE for /api/admin/:id
router.delete('/:id', async (req, res, next) => {
    try {
        const shoeId = req.params.id
        console.log(shoeId, "$$$$$$$")
        const deleteShoe = await shoe.findOne({where:{id:shoeId}})
        console.log(deleteShoe)
        await shoe.destroy({
            where:{
                id:shoeId
            }
        })
        res.send(deleteShoe)
    } catch (err) {
        next(err)
    }
})

module.exports = router