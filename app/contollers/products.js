(function (){
    'use strict';
    angular.module('myApp')
      .controller('productController',productController);
      productController.$inject = ['$scope','sharedService','$rootScope'] 
      function productController($scope,sharedService,$rootScope){
         var vm = this; 
      
           $scope.$on('handleBroadcast', function() {    
            $scope.message = 'TWO: ' + sharedService.newMessage;
               
               console.log($scope.message);
           });
          
            
            
           
      }
                                     
                      
})();