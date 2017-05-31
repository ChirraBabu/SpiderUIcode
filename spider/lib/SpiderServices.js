//app.service('SpiderServices',function($scope, $http){
//    
//    this.addresspost=function(){
//        return $htp.get("http://localhost:8765/demo/product");
//    };
//    
//    
//});

  app.service('SpiderServices', function($scope, $http){
      
      this.sayHello= function(text){
        return "Service says \"Hello " + text + "\"";
    };
//         alert("dndajdbhj")
//    this.sayHello= function(text){
//        return $htp.get("http://localhost:8765/demo/product");
//    };        
//   alert("dndajdbhj")
});