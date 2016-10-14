// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.run(function($ionicPlatform, $ionicPopup) {
  $ionicPlatform.ready(function() {

    // Check for network connection
    if(window.Connection) {
      if(navigator.connection.type == Connection.NONE) {
        $ionicPopup.confirm({
          title: 'No Internet Connection',
          content: 'Sorry, no Internet connectivity detected. Please reconnect and try again.'
        })
        .then(function(result) {
          if(!result) {
            ionic.Platform.exitApp();
          }
        });
      }
    }

  });
})
.config(function($ionicConfigProvider,$stateProvider, $urlRouterProvider) {
$ionicConfigProvider.tabs.position('bottom');
  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('amasales', {
      url: "/amasales",
      parent: 'tabs',
      views: {
        'amasales-tab': {
          templateUrl: "templates/amasales.html",
          controller: 'amasalesCtrl'
        }
     
      }
    })
     .state('amasales.saleDetails', {
      url: "/saleDetails/:index",
      views: {
        'amasales-tab@tabs': {
          templateUrl: "templates/saleDetails.html",
          controller: 'saleDetails'
        }
      }
    })
    .state('tabs.aboutsales', {
      url: "/aboutsales",
      views: {
        'aboutsales-tab': {
          templateUrl: "templates/aboutama.html",
          controller: 'amaabout'
        }
      }
    })
   
  $urlRouterProvider.otherwise("/tab/amasales");

})  
