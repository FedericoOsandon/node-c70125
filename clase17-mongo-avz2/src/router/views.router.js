const { Router } = require('express')
const { UserManagerMongo } = require('../daos/MONGO/usersManager.mongo')

const router = Router()

router.get('/', (req, res) => {
    res.render('index', {})
})

router.get('/users', async (req, res) => {
    const userService = new UserManagerMongo()
    const { limit, pageNum } =  req.query
    try {
        const {
            docs,
            hasPrevPage,
            hasNextPage,
            prevPage,
            nextPage,
            page
        } = await userService.getUsers({limit, page: pageNum})

        res.render('users', {
            users: docs,
            hasPrevPage,
            hasNextPage,
            prevPage,
            nextPage,
            page
        })
    } catch (error) {
        console.log(error)
    }   
})

module.exports = router