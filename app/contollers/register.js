(function (){
    'use strict';
    angular.module('myApp')
      .controller('registerController',registerController);
      registerController.$inject = ['$scope','sharedService','$rootScope'] 
      function registerController($scope,sharedService,$rootScope){
         var vm = this; 
         vm.registerUser = registerUser;
         
         function registerUser(user){
            vm.registerDetails = user;
             
          
             
            sharedService.setRegisterDetails(vm.registerDetails);
            vm.message = sharedService.getMessage().then(function(response){
               vm.sdfsdf = response.data;
                console.log(vm.sdfsdf);
            });
           
                                                         
          
        }
           vm.getCheckboxData = getCheckboxData;
           vm.allCheckBoxes = [];
           vm.allchecks=[];
          function getCheckboxData(){
            
              return sharedService.getCheckBox().then(function(data){
                    vm.contributors = data;
                                
                    vm.contributors.map(function(item){
                       item.isChecked = false;
                       return vm.contributors;
                   })
                    
                    vm.allCheckBoxes.push(vm.contributors);
                    vm.allchecks = vm.allCheckBoxes[0];
                    console.log(vm.allchecks);
              });
            
          }
          
         vm.Checked = Checked;
         function Checked(obj){
            
             var result =  vm.allchecks.map(function(item){
                 if(item.name === obj.name){
                 item.isChecked = obj.isChecked;
                 }
                 return item;
             });
            
              var filteredResultLength = result.filter(function (item) {
                      return item.isChecked;
                    }).length;
              
                    if (filteredResultLength) {
                    
                       vm.checking = (result.length == filteredResultLength);
                    }
             
             
          }
          vm.selectAll = selectAll;
          function selectAll(check){
              
             vm.allchecks.map(function(item){
                 
                 item.isChecked = check;
             });
           }
          
          vm.getAllCountries = getAllCountries;
          function getAllCountries(){
              sharedService.getCountries().then(function(response){
                  $scope.allCoutries = response.data;
                  console.log($scope.allCoutries);
              })
          }
          getAllCountries();
          
          $scope.states = [{
              "name":"ap",
              "code": "AF"
          },{
              "name":"telangana",
              "code": "AF"
          },{
              "name":"dfdsfd",
              "code": "AX"
          },{
              "name":"dfssdafd",
              "code": "AX"
          },{
              "name":"sdfsd",
              "code": "AX"
          }];
         
          $scope.updateCountry = function(){
             
              $scope.availableStates = [];

              angular.forEach($scope.states, function(value){
                if(value.code == $scope.country){
                  $scope.availableStates.push(value);
                }
              });
            }
          
          $scope.$watch('name',function(newValue,oldValue){
              
              console.log(newValue,oldValue);
          });
          
          
       
           
    
}
})();
