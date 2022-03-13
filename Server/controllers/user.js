const User = require('../models/user')

const create = (user) => {
    console.log(user)
    return User.create(user)
};


module.exports = { create }