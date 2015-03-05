'use strict';

angular.module('animal-arena')
    .service('Arena', function (Animals, Terrains) {

        var Arena = this;

        Arena.generateMatchup = function () {
            var opponent = Animals.getRandomAnimal(),
                terrain = Terrains.getRandomTerrain();

            return {
                opponent: opponent,
                terrain: terrain
            };
        };

    });