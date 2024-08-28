const {Router} = require('express')
const { ProductManagerMongo } = require('../../daos/Momgo/productManagerMongo')


const router = Router()
const productService = new ProductManagerMongo()


router.post('/', async (req, res) => {
    try {
        const { title, price, stock, thumbnal, catogory } = req.body
        // mas validaciones
        if (!title || !price || !stock || !thumbnal) return res.status(400).send({status: 'error', message: 'Faltan completar campos'})
        const response = await productService.createProduct(body)
        res.send({status: 'success', payload: response})
    } catch (error) {
        console.log(error)
    }
})

router.get('/', async (req, res) => {
    try {
        console.log('router get products')
        const products =  await productService.getProducts()
        res.send ({status: 'succes', playload:products})
    } catch (ERROR) {
        console.log(ERROR)
    }
})

router.get('/:pid', async (req, res) => {
    res.send('Este es el producto')
})

router.put('/:pid', async (req, res) => {
    res.send('Actualice el prodcto')
})

router.delete('/:pid', async (req,res) =>{
    res.send('borramos el producto')
})





module.exports = router


//try {
//
//} catch (e) {
//    
//    console.error("ERROR!")
//} 