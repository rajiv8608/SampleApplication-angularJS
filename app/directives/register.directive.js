(function(){
    'use strict';
    angular.module('myApp').directive('registerDirective', function(){
        return{
            restrict: 'EAC',
            templateUrl: 'app/templates/registerDir.html',
            controller: 'registerController',  
            bindToController: true
                
        }
    });

})();