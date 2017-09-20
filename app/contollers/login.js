(function (){
    'use strict';
    angular.module('myApp')
      .controller('loginController',loginController);
      loginController.$inject = ['$scope','sharedService','$rootScope'] 
      function loginController($scope,sharedService,$rootScope){
         var vm = this; 
         vm.loginUser = loginUser;
          
          
          
          
         vm.existedLoginDetails = [];
        function loginUser(loginDetails){
             vm.existedLoginDetails = sharedService.getRegisterDetails();
             if (  vm.existedLoginDetails.Email == loginDetails.Email &&  vm.existedLoginDetails.Password ==loginDetails.Password ){
                 
                alert("login successfull");
             }
            else{
                alert("login failed");
            }
            
           
        }
          
        
      }
                                     
                      
})();