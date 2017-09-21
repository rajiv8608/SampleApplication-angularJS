
(function (){
    'use strict';
    var $stateProviderRef=null;
    angular.module('myApp', ['ui.router', 'ui.bootstrap'])
       .controller('mainController',mainController);
      mainController.$inject = ['$scope','$http','routerSetup', 'sharedService','$urlRouter'] 
      function mainController($scope,$http,routerSetup, sharedService,$urlRouter){
         var vm = this;
          vm.showTransation = false;
           $scope.routesObject=[];
           $scope.routesObject = sharedService.getTotalRoutes();
           $scope.addNewState =function(newStateName){
              var state = {
                "name": newStateName,
                "url": "/"+newStateName,
                "state": newStateName,
                "templateUrl": "app/templates/default.html",
                "controller": "defaultController",
                "controllerAs": "default"
              };
               $scope.routesObject.push(state);
               $stateProviderRef.state(newStateName, state);
           }
        
                $urlRouter.sync();
                $urlRouter.listen();
          
          vm.toggleNavigation =function(){
               vm.showTransation = !vm.showTransation ;
            
          }
          
        
      }
      angular.module('myApp').config(function ($qProvider,
        $stateProvider, $urlRouterProvider, $locationProvider ){
             $urlRouterProvider.deferIntercept();
             $urlRouterProvider.otherwise('/home');
             $stateProviderRef = $stateProvider;
        
                           
      });
      angular.module('myApp').run(['$rootScope', '$state', '$stateParams',
          function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }]);
     angular.module('myApp').run(['$q', '$rootScope','$http', '$urlRouter','sharedService',
      function ($q, $rootScope, $http, $urlRouter,sharedService) 
      {        
        $http.get("app/json/data.json").then(function(response)
          {
            sharedService.setRoutes(response.data);
            var data = response.data;
           
            angular.forEach(data, function (value, key) 
            { 
              var state = {
                "url": value.url,
                "controller" : value.controller,
                "controllerAs": value.controllerAs,
                "state": value.state,
                "templateUrl":value.templateUrl
              };
                 $stateProviderRef.state(value.name, state);
            
              });
         
            });
          
            $urlRouter.sync();
            $urlRouter.listen();
          }]);
})();