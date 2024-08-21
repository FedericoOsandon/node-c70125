const { Router } = require('express')
const { ProductManagerMongo } = require('../../daos/MONGO/productsManager.mongo')

const router = Router()
const productService = new ProductManagerMongo()

router.get('/', async (req, res) => {
    try {
        const products = await productService.getProducts()
        res.send({status: 'success', payload: products})
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const {body} = req
        // mas validaciones
        const response = await productService.createProduct(body)
        res.send({status: 'success', payload: response})
    } catch (error) {
        console.log(error)
    }
})

router.get('/:pid', async (req, res) => {
    res.send('get de producto')
})

router.put('/:pid', async (req, res) => {
    res.send('put de producto')
})

router.delete('/:pid', async (req, res) => {
    res.send('delete de producto')
})

module.exports = router

//  zod