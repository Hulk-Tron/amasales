angular.module('starter')

// AmaSalesController
.controller("amasalesCtrl",function($scope,$state,saleService){
   $scope.loading = true;
// $scope.data = saleService.getData()
 saleService.myData().then(function(d) {
    $scope.loading = false;
    $scope.data = d;
    console.log($scope.data)
  });
})



// AmaAbout Controller
.controller("amaabout",function(){
   
})
.controller("saleDetails",function($state,$stateParams,$scope,saleService){
  $scope.back = function(){
    $state.go('amasales')
  }
     var index = $stateParams.index
     saleService.myData().then(function(d) {
     $scope.data = d.results;
     $scope.sale = $scope.data[index]
     });})