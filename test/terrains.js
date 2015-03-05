'use strict';

describe('Terrains', function () {

    beforeEach(function () {
        module('animal-arena');
    });

    describe('Finding all terrains', function () {
        it('should return all terrains in the collection', inject(function (Terrains) {
            Terrains.findAll().length.should.be.above(0);
        }));
    });

    describe('Finding a specific terrain', function () {
        it('should return a single terrain in the collection when given a parameter', inject(function (Terrains) {
            var terrain = Terrains.find('swamp');
            should.exist(terrain);
        }));

        it('should return undefined if no terrain is found', inject(function (Terrains) {
            var terrain = Terrains.find('i_dont_exist');
            should.not.exist(terrain);
        }));

        it('should have specific property', inject(function (Terrains) {
            var terrain = Terrains.find('swamp');
            terrain.should.have.property('location')
        }));

        it('should return a random terrain', inject(function (Terrains) {
            var terrain = Terrains.getRandomTerrain();
            should.exist(terrain);
        }));
    });

});