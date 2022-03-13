const express = require("express");
const router = express.Router();
const User = require('../models/user');
const {create}= require('../controllers/user')


router.get('/', async (req, res, next) => {
    const users = await User.find()
    res.json(users)
})
router.post('/', async (req, res, next) => {
    const user = req.body;
    const id = await User.find({}).count();
    user.id = id + 1;
    create(user)
    .then((doc) =>  res.json(doc))
    .catch((e) => next(e));
})


module.exports = router;