/* global angular */

angular.module('leafs').factory('Leafs', ['$resource',
  function ($resource) {
    return $resource('api/leafs/:leafId', {
      leafId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    })
  }
])
