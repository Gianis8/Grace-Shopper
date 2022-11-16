const router = require('express').Router()
const { order, shoe, order_shoe } = require('../db')

// GET for /api/orders/cart
router.get('/cart/:id', async (req, res, next) => {
    const id = req.params.id
    console.log("express route reached with id:", id)
    try {
        const cart = await order.findAll({ 
            where: { 
                userId: id,
                status: 'cart' 
            }, 
            include: shoe 
        })
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

router.post('/addToCart', async (req,res,next) => {
    const addShoe = req.body.Shoe
    const user = req.body.user


    try{
        const cart = await order.findOne({where: {
            userId: user.id,
            status: "cart"
        }})
        const product = await shoe.findOne({where:{
            id:addShoe.id
        }})
        console.log(cart, product)
        const added = await cart.addShoe(product, {through: {quantity:1, unitPrice: addShoe.price}})
        res.send(added)
    }catch(err){
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