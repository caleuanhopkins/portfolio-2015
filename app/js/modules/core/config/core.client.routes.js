'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 
    function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        // Redirect to home view when route not found
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('public', {
                abstract: true,
                template: "<div ui-view />",
                data: {

                }
            })
            .state('public.home', {
                url: '/',
                controller: 'HomepageController',
                templateUrl: 'app/js/modules/core/views/homepage.client.view.html',
            })
            .state('public.404', {
                url: '/404/',
                templateUrl: 'app/js/modules/core/views/404.client.view.html',
            })
    }
]);