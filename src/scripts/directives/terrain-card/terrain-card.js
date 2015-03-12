'use strict';

angular.module('animal-arena')
    .directive('terrainCard', function () {

        return {
            restrict: 'EA',
            scope: {
                terrain: '=terrainCard'
            },
            templateUrl: 'scripts/directives/terrain-card/terrain-card.html'

        };
    });
