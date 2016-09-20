angular.module('starter')
.factory('saleDetails',function($http){
  var APIURL = "http://yatuapps.com/amasales"
  var myService ={
      myData : function(){
          var promise = $http.get(APIURL+'/api.php').then(function(response){
              console.log(response)
              return response.data
          });
          return promise
      }
  }
return myService
    })