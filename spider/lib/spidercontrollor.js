app.controller('spidercontrollor', function ($scope, $http) {
    $scope.status = [];
   $scope.product = [];
   $scope.statuss = [];
   $scope.adhar = [];
   $scope.server = [];
   $scope.stock = [];
   $scope.shoppingcart = [];
   $scope.productservice = [];
   $scope.shop = [];
   $scope.address1 = [];
   $scope.passportserver = [];
     
   $scope.statusClassIsIt= function(someValue){
         if(someValue == 200)
                return "bgsuccess_color";
         else if(someValue == 400)

             return "bgsuccess_color0";
        else
             return "spider-btn0";
    }  
     // ============= status=================
      $http({
         method: "GET",
        // url: "http://localhost:8322/passportdtl/pdetails1"
         url: "http://localhost:8323/passportaddr/address1"
  }).then(function address1(response) {
   $scope.address1 = response.data;
         console.log($scope.address1);
 }, function myError(response) {
         $scope.address1 = response.address1Text;

     });
     
      // ============= product=================
      $http({
         method: "GET",
         url: "http://localhost:8765/demo/product"
  }).then(function product(response) {
   $scope.product = response.data;
         console.log($scope.product);
 }, function myError(response) {
         $scope.product = response.productText;

     }); 
    // ============= product=================
      $http({
         method: "GET",
         url: "http://localhost:8321/passport/office"
  }).then(function passport(response) {
   $scope.passport = response.data;
         console.log($scope.passport);
 }, function myError(response) {
         $scope.passport = response.passportText;

     }); 
     // ============= adhar=================
     $http({
         method: "GET",
         url: "http://localhost:8686/adhar/details"
  }).then(function adhar(response) {
   $scope.adhar = response.data;
         console.log($scope.adhar);
 }, function myError(response) {
         $scope.adhar = response.adharText;

     });
     
//    ============ server  ===============
     $http({
         method: "GET",
         url: "http://localhost:8777/server/message"
  }).then(function server(response) {
   $scope.server = response.data;
         console.log($scope.server);
 }, function myError(response) {
         $scope.server = response.serverText;

     });
     //    ============ shoppingcart  ===============
     $http({
         method: "GET",
         url: "http://localhost:8788/stock/stocklist"
  }).then(function stock(response) {
   $scope.stock = response.data;
         console.log($scope.stock);
 }, function myError(response) {
         $scope.stock = response.serverText;

     });
     //    ============ shoppingcart  ===============
     $http({
         method: "GET",
         url: "http://localhost:8002/shoppingcart/cart/items"
  }).then(function shoppingcart(response) {
   $scope.shoppingcart = response.data;
         console.log($scope.shoppingcart);
 }, function myError(response) {
         $scope.shoppingcart = response.shoppingcartText;

     });
     //    ============ productservice  ===============
     $http({
         method: "GET",
         url: "http://localhost:8001/productservice/response"
  }).then(function productservice(response) {
   $scope.productservice = response.data;
         console.log($scope.productservice);
 }, function myError(response) {
         $scope.productservice = response.productserviceText;

     });
     $http({
         method: "GET",
         url: "http://localhost:8222/product/shop"
  }).then(function shop(response) {
   $scope.shop = response.data;
         console.log($scope.shop);
 }, function myError(response) {
         $scope.shop = response.shopText;

     });
 });