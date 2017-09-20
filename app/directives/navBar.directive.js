(function(){
    'use strict';
    angular.module('myApp').directive('navbarDirective', function(){
        return{
            restrict: 'EAC',
            templateUrl: 'app/templates/navBar.html',
            controller: 'mainController',  
            bindToController: true

        }
    });

})();