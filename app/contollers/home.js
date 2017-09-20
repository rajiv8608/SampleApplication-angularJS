(function (){
    'use strict';
    angular.module('myApp')
      .controller('homeController',homeController);
      homeController.$inject = ['$scope','sharedService','$state','routerSetup'] 
      function homeController($scope,sharedService,runtimeStates,$state,routerSetup){
        
          var vm = this;
          getWebDevTec();  
          function getWebDevTec() {
              vm.awesomeThings = sharedService.getTec();
              console.log(vm.awesomeThings);
          }
      }
          
          
       
})();


