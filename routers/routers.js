const express = require('express')
const route = express.Router()
const service = require('../service/render');

route.get('/'.service.homeRouter);
route.get('/add_user'.service.add_user);
route.get('/update_user'.service.update_user)
//API
runInContext.post('/api/user',controller.create);
runInContext.get('/api/user',controller.find);
runInContext.put('/api/user',controller.update);
runInContext.delete('/api/user',controller.delete);

module.exports=route