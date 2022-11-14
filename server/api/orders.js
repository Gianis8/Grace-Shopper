const router = require('express').Router()
const { order, shoe, order_shoe } = require('../db')

// GET for /api/orders/cart
router.get('/cart', async (req, res, next) => {
    const id = 3 // have this variable correspond to whoevers logged in
    console.log("express route reached")
    try {
        const cart = await order.findAll({ 
            where: { 
                userId: id,
                status: 'cart' 
            }, 
            include: shoe 
        })
        console.log(cart)
        res.send(cart)
    } catch (err) {
        next(err)
    }
})

// GET for /api/orders/history
router.get('/history', async (req, res, next) => {
    try {
        res.send(await order.findAll({ where: { userId: id, status: 'complete' }, include: [shoe] }))
    } catch (err) {
        next(err)
    }
})

// POST for /api/orders/checkout
router.post('/checkout', async (req, res, next) => {
    try {
        res.send(await order.create({ shippingAddress: req.body }))
    } catch (err) {
        next(err)
    }
})

module.exports = router