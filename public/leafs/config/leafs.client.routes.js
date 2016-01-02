angular.module('leafs').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'leafs/views/list-leafs.client.view.html'
        }).
        when('/leafs', {
            templateUrl: 'leafs/views/list-leafs.client.view.html'
        }).
        when('/leafs/create', {
            templateUrl: 'leafs/views/create-leaf.client.view.html'
        }).
        when('/leafs/:leafId', {
            templateUrl: 'leafs/views/view-leaf.client.view.html'
        }).
        when('/leafs/:leafId/edit', {
            templateUrl: 'leafs/views/edit-leaf.client.view.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);