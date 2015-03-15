'use strict';

angular.module('animal-arena')
    .directive('animalGrid', function () {

        return {
            restrict: 'EA',
            templateUrl: 'scripts/directives/animal-grid/animal-grid.html'
        };
    });
