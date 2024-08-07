const path = './dbjson/cartsDb.json'

class CartManagerFS {
    constructor(){
        this.path = path
    }
    async readCart() {
        try {
            const cartsJson = await fs.promises.readFile(path, 'utf-8')
            const cartsJs = JSON.parse(cartsJson)
            return cartsJs            
        } catch (error) {
            return []            
        }
        
    } 
    // createCart          = async () => {}
    // getCartById         = async () => {}
    // createProductToCart = () => {}
}

// [
//     {id: '', products: [ { productID: '', quantity: 1 } ]},
// ]