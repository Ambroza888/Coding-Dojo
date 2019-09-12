const controller = require('./controller')

module.exports = function(app){
  app.get('/task', controller.index)
  app.post('/task/create', controller.create)
  app.get('/task/:id', controller.findById)
  app.put('/task/:id', controller.update)
  app.delete('/task/:id', controller.delete)
}