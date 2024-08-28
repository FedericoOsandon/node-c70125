const { userModel } = require("../../models/users.model")

class UserManagerMongo {
    constructor(){
        this.model = userModel
    }

    //para productos un filtro mas sort: {price: -1},  lean: true}) {}
    getUsers = async ({limit=10, page=1, opts: {}}) => await this.model.paginate(opts, {limit, page, lean: true})
}

module.exports = {
    UserManagerMongo
}