(function (){
    'use strict';
    angular.module('myApp')
    .service('sharedService',sharedService);
    sharedService.$inject =["$rootScope",'$http'];
    function sharedService($rootScope,$http){
        
        var vm = this;
        
  
    

   
   
        
        var data = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'title': 'Bootstrap',
        'url': 'http://getbootstrap.com/',
        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        'logo': 'bootstrap.png'
      },
      {
        'title': 'Angular UI Bootstrap',
        'url': 'http://angular-ui.github.io/bootstrap/',
        'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
        'logo': 'ui-bootstrap.png'
      }
    ];

    vm.getTec = getTec;

    function getTec() {
      return data;
    }
        this.totalRoutes = [];
        this.setRoutes = function (data) {
            this.totalRoutes = data;
        }
        this.getTotalRoutes = function () {
            return this.totalRoutes;
        }
        this.registerDetails = [];
        this.setRegisterDetails = function(details){
             this.registerDetails = details;
        }
        this.getRegisterDetails = function(){
            return this.registerDetails;
        }
   
        
    vm.getMessage=getMessage;
    function getMessage(){    
    return $http.get("app/json/message.json");
        
    }
        
        
          vm.getCheckBox=getCheckBox;
    function getCheckBox(){    
     return $http.get("app/json/checkbox.json")
        .then(getCheckBoxComplete)
        .catch(getCheckBoxFailed);
           function getCheckBoxComplete(response) {
            return response.data;
              
      }

      function getCheckBoxFailed(error) {
       
      }
    }
    vm.getCountries = getCountries;
    function getCountries(){
        return $http.get('app/json/countries.json');
    }

    
    
    }
 })();