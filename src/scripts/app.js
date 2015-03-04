"use strict";

angular
    .module('animal-arena', [
        'LocalStorageModule'
    ])
    .config(function(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('animal-arena')
    });