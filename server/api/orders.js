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
        console.log(err)
    }
})

// GET for /api/orders/history
router.get('/history/:id', async (req, res, next) => {
    const id = req.params.id
    try {
        const orders = await order.findAll({ 
            where: { 
                userId: id, 
                status: 'complete' 
            }, 
            include: [shoe] 
        })
        res.send(orders)
    } catch (err) {
        next(err)
    }
})

router.post('/addToCart', async (req, res, next) => {
    const addShoe = req.body.Shoe
    const user = req.body.user
    const cartId = req.body.orderId
    try {
        const cart = await order.findOne({
            where: {
                userId: user.id,
                status: "cart"
            }
        })
        const product = await shoe.findOne({
            where: {
                id: addShoe.id
            }
        })
        const isCart = await order_shoe.findOne({
            where: {
                orderId: cartId,
                shoeId: addShoe.id

            }
        })

        if (isCart && isCart.dataValues.quantity > 0) {
            const quant = isCart.dataValues.quantity
            order_shoe.update({ quantity: quant + 1 }, {
                where: {
                    orderId: cartId,
                    shoeId: addShoe.id
                }
            })
        } else {
            const added = await cart.addShoe(product, { through: { quantity: 1, unitPrice: addShoe.price } })
            res.send(added)
        }
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

router.delete('/remove', async (req, res, next) => {
    const obj = req.body
    console.log(obj)
    try {
        const response = await order_shoe.findOne({
            where: {
                orderId: obj.orderId,
                shoeId: obj.shoeId
            }
        })
        await order_shoe.destroy({
            where: {
                orderId: obj.orderId,
                shoeId: obj.shoeId
            }
        })
        res.send(response)
    } catch (err) {
        next(err)
    }
})

router.put('/quantity', async (req, res, next) => {
    const obj = req.body
    let response = {}
    try {
        const is = await order_shoe.findOne({
            where: {
                shoeId: obj.shoeId,
                orderId: obj.orderId
            }
        })
        let num = null;

        if (is.dataValues) {
            num = is.dataValues.quantity

            console.log("number", num)
            if (obj.addMinus === '1' && is.dataValues) {
                await order_shoe.update({ quantity: num + 1 }, {
                    where: {
                        shoeId: obj.shoeId,
                        orderId: obj.orderId
                    }
                })
                const response = await order_shoe.findOne({
                    where: {
                        shoeId: obj.shoeId,
                        orderId: obj.orderId
                    }
                })
                console.log('upped quantity')
                res.send(response)
            } else if (obj.addMinus === '0' && num === 1) {
                await order_shoe.destroy({
                    where: {
                        orderId: obj.orderId,
                        shoeId: obj.shoeId
                    }
                })
                const response = await order_shoe.findOne({
                    where: {
                        shoeId: obj.shoeId,
                        orderId: obj.orderId
                    }
                })
                console.log("removed row")
                res.send(response)
            } else if (obj.addMinus === '0' && num > 1) {
               await order_shoe.update({ quantity: num - 1 }, {
                    where: {
                        shoeId: obj.shoeId,
                        orderId: obj.orderId
                    }
                })
                const response = await order_shoe.findOne({
                    where: {
                        shoeId: obj.shoeId,
                        orderId: obj.orderId
                    }
                })
                console.log("lessend quantity")
                res.send(response)
            } else {
                console.log("nothing happened &&&&&&&&&&&")
            }
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = router