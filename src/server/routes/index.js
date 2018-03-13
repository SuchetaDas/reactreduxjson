const routes = require('express').Router();
const items = require('./items');

routes.use('/items',items);

routes.get('/',(req,res) =>{
    res.status(200).json({ message: 'Connected!'});
});

module.exports = routes;