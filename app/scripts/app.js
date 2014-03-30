'use strict';

angular.module('rummyApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        // I've disabled this until I can get the routing to play nice with express server
        // $locationProvider.html5Mode(true);
    });