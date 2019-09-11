const controller = require('./controller')

module.exports = function(app){
  app.get('/', controller.index)
  app.get('/new/:name', controller.new)
  app.get('/remove/:name', controller.remove)
  app.get('/:name', controller.see)
}