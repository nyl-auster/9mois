/**
 * This is the master module of the application, instancied in
 * index.html with <body ng-app="app">
 *
 * It includes our modules, allowing us to enable / disable modules easily.
 *
 * @see www/index.html
 */

/**
 * Master module, calling all other modules.
 * @see https://docs.angularjs.org/guide/module
 */
angular.module('app', [
    // 'app.routerUiDebug', // display ui-router events
    // 'app.authentication',
    // 'app.user',
    // 'app.onboard',
    'app.page',
    'app.todo',
    'app.week'
  ])

  .run([
    '$ionicPlatform', '$rootScope', '$location',
    function($ionicPlatform, $rootScope, $location) {

      $ionicPlatform.ready(function() {

        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }

      });

      // When ui-router is changing state :
      $rootScope.$on("$stateChangeStart",

        function (event, toState, toParams, fromState, fromParams) {

          // if user is already authenticated, skip all onboarding screens
          /*if(authentication.isAuthenticated() && (toState.name.indexOf('app.onboard') === 0)) {
           $location.path('users');
           }*/
          // if user is not authenticatated, redirect him to onboard screens
          /*
           if (!authentication.isAuthenticated() && (toState.name.indexOf('app.onboard') === -1)) {
           $location.path('onboard/home');
           }
           */

        });
    }]);
