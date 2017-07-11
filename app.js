//app.js
(function() {
'use strict';

    angular
        .module('myapp', [])
        .controller('HomeController', HomeController);

    HomeController.inject = ['$log'];
    function HomeController($log) {
        var vm = this;
        vm.title = "Hello Worldddddddddd";

        // activate();

        // ////////////////

        // function activate() { }
    }
})();