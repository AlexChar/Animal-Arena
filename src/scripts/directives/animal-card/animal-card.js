'use strict';

angular.module('animal-arena')
    .directive('animalCard', function () {

        return {
            restrict: 'EA',
            scope: {
                animal: '=animalCard'
            },
            templateUrl: 'scripts/directives/animal-card/animal-card.html'

        };
    });
