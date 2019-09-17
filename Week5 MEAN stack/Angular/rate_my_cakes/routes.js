const controller = require('./controller')

module.exports = function(app){
  app.get('/cake', controller.index)
  app.post('/cake/create', controller.create)
  app.get('/cake/:id', controller.findById)
  app.delete('/cake/:id', controller.delete)
  app.put('/cake/:id', controller.update)
}