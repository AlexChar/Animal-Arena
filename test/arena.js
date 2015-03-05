'use strict';

describe('Arena', function () {

    beforeEach(function () {
        module('animal-arena');
    });

    describe('Matchup generation', function () {
        it('should generate a matchup with an oppenent and a terrain', inject(function (Arena) {
            var matchup = Arena.generateMatchup();
            should.exist(matchup.opponent);
            should.exist(matchup.terrain);
        }));
    });

})