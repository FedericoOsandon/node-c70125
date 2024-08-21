const { Router }    = require('express')
const productRouter = require('./api/products.router.js')
const viewRouter    = require('./views.router.js')
const { uploader } = require('../utils/uploader.js')

const router = Router()

router.post('/',  uploader.single('myFile'), (req, res) => {
    res.send('archivo subido')
})

router.use('/', viewRouter)
router.use('/api/products', productRouter)
router.use('/api/carts', ()=>{})
router.use('/api/users', ()=>{})
router.use('/api/messages', ()=>{})


module.exports = router