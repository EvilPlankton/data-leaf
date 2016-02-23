/* global angular, location */

angular.module('leafs').controller('LeafsController', ['$scope', '$routeParams', '$location', 'Authentication', 'Leafs',
  function ($scope, $routeParams, $location, Authentication, Leafs) {
    $scope.authentication = Authentication

    $scope.create = function () {
      var leaf = new Leafs({
        dsn: {
          host: this.dsnhost,
          port: this.dsnport,
          user: this.dsnuser,
          pwd: this.dsnpwd,
          dbname: this.dsndbname,
          dbtype: this.dsndbtype },
        query: this.query,
        name: this.name
      })

      leaf.$save(function (response) {
        $location.path('leafs')
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message
      })
    }

    $scope.find = function () {
      $scope.fullURL = location.host
      $scope.leafs = Leafs.query()
    }

    $scope.findOne = function () {
      $scope.leaf = Leafs.get({
        leafId: $routeParams.leafId
      })
    }

    $scope.update = function () {
      $scope.leaf.$update(function () {
        $location.path('leafs')
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message
      })
    }

    $scope.delete = function (leaf) {
      leaf.$delete(function () {
        $location.path('leafs')
      })
    }

    $scope.copy = function (leaf) {
      // Hack to convert Mongoose document back to JSON for create()
      var leafMon = leaf.toJSON()
      delete leafMon._id
      delete leafMon._id
      delete leafMon.__v
      delete leafMon.creator
      delete leafMon.created
      leafMon.name += '-copy'

      var leafCopy = new Leafs(leafMon)

      leafCopy.$save(function (response) {
        $location.path('leafs')
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message
      })
    }
  }
])
