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
            })
            .state('dashboard', {
                url: '/',
                templateUrl: 'scripts/partials/dashboard.html',
                controllerAs: 'dashboard',
                controller: 'DashboardCtrl'
            });


        localStorageServiceProvider.setPrefix('animal-arena');
    });

angular.module('exceptionOverride', []).factory('$exceptionHandler', function () {
    return function (exception, cause) {
        Bugsnag.notifyException(exception, {diagnostics:{cause: cause}});
    };
});