var users = require('../../app/controllers/users.server.controller')
var leafs = require('../../app/controllers/leafs.server.controller')

module.exports = function (app) {
  app.route('/api/leafs')
    .get(leafs.isLocal, leafs.list)
    .post(users.requiresLogin, leafs.create)

  app.route('/api/leafs/:leafId')
    .get(leafs.isLocal, leafs.read)
    .put(users.requiresLogin, leafs.hasAuthorization, leafs.update)
    .delete(users.requiresLogin, leafs.hasAuthorization, leafs.delete)

  app.route('/exec/:leafId')
    .get(leafs.exec)

  app.param('leafId', leafs.leafByID)
}
