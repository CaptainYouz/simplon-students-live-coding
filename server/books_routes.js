const route = require ('express').Router()
const data = require('./data.json')

route.get('/', (req,res)=> {
    res.json(data)
});
 
module.exports = route