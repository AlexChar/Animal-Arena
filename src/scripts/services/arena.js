'use strict';

angular.module('animal-arena')
    .service('Arena', function (Animals, Terrains, Storage) {

        var Arena = this;
        var playedMatches = Storage.load('matches') || [];

        var weights = {
          ferocity: 1,
          tenacity: 0.8
        };

        Arena.generateMatchup = function () {
            var opponent = Animals.getRandomAnimal(),
                terrain = Terrains.getRandomTerrain();

            return {
                opponent: opponent,
                terrain: terrain
            };
        };

        Arena.calculateCombatScore = function (animal) {
            return ((animal.stats.ferocity * weights.ferocity) + (animal.stats.tenacity * weights.tenacity)) / 2;
        };

        Arena.calculateTerrainInfuence = function (animal, terrain) {
            var landInfluence = animal.stats.land * (terrain.stats.land / 10);
            var waterInfluence = animal.stats.water * (terrain.stats.water / 10);

            return (landInfluence + waterInfluence) / 20;
        };

        Arena.calculateTotalScore = function (animal, terrain) {
            var combatScore = Arena.calculateCombatScore(animal);
            var terrainInfluence = Arena.calculateTerrainInfuence(animal, terrain);

            return combatScore * terrainInfluence;
        };

        Arena.determineWinner = function (playerAnimal, opponentAnimal, terrain) {
            var playerScore = Arena.calculateTotalScore(playerAnimal, terrain);
            var opponentScore = Arena.calculateTotalScore(opponentAnimal, terrain);
            var outcome;

            if (playerScore === opponentScore) {
                outcome = 'draw';
            }
            else {
                outcome = playerScore > opponentScore ? 'player' : 'opponent';
            }

            playedMatches.push({
                player: playerAnimal.id,
                opponent: opponentAnimal.id,
                terrain: terrain.id,
                winner: outcome
            });

            Storage.save('matches', playedMatches);

            return outcome;
        };

    });