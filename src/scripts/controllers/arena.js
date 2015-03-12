'use strict';

angular.module('animal-arena')
    .controller('ArenaCtrl', function (Arena, $timeout) {

        var vm = this;

        $timeout(function () {
            vm.matchup = Arena.generateMatchup();
        }, 2000);

    });