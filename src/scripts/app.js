"use strict";

angular
    .module('animal-arena', [
        'LocalStorageModule',
        'ui.router'
    ])
    .config(function(localStorageServiceProvider, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('arena', {
                url: '/arena',
                templateUrl: 'scripts/partials/arena.html',
                controllerAs: 'arena',
                controller: 'ArenaCtrl'
            });

        localStorageServiceProvider.setPrefix('animal-arena');
    });