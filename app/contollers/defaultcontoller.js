(function (){
    'use strict';
    angular.module('myApp')
      .controller('defaultController',defaultController);
      defaultController.$inject = ['$scope'] 
      function defaultController($scope){
         var vm = this; 
          
        var canvas = new fabric.Canvas('canvas');
        var circle = new fabric.Circle({
  left: 100,
  top: 100,
  radius: 50
});

circle.setGradient('fill', {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: circle.height,
  colorStops: {
    0: '#000',
    1: '#fff'
  }
});
          
         var rect = new fabric.Rect();
          rect.animate('angle', 45, {
              onChange: canvas.renderAll.bind(canvas)
            });
          
       
                   var comicSansText = new fabric.Text("I'm in Comic Sans", {
                      fontFamily: 'Comic Sans'
                    });


          

          canvas.add(circle,rect,comicSansText);
 

            
      }
                                     
                      
})();