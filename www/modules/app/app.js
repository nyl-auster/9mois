
/**
 * Master module, initialized by ng-app directive.
 * We can enable / disabled app modules here, by adding them
 * as a dependency of this module.
 *
 * @see https://docs.angularjs.org/guide/module
 */
angular.module('app', [
    // 'app.routerUiDebug', // display ui-router events
    // 'app.authentication',
    // 'app.user',
    // 'app.onboard',
    // 'app.todo',
    // 'app.week'
    'app.theme',
    'app.quiz'
  ])

  .run([
    '$ionicPlatform', '$rootScope', '$location',
    function($ionicPlatform, $rootScope, $location) {

      $ionicPlatform.ready(function() {


        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          // empecher le clavier de faire faire un bon vers le haut à la webview au focus sur un champ
          // cordova.plugins.Keyboard.disableScroll(true);
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
