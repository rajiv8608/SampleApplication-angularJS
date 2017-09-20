(function (){
    'use strict';
    angular.module('myApp')
    .provider('routerSetup', function routerSetup($stateProvider){
        this.$get = function($q, $timeout, $state) { 
            
        return { 
          addState: function(name, state) { 
            $stateProvider.state(name, state);
          }
    }
  }
    });
    
})();