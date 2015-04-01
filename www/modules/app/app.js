/**
 * This is the master module of the application, instancied in
 * index.html with <body ng-app="app">
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
    'app.user',
    'app.onboard',
    'app.theme'
  ])

  .run([
    '$ionicPlatform', '$rootScope', 'authentication', '$location',
    function($ionicPlatform, $rootScope, authentication, $location) {

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
    }])


  // create our states; this is some kind of advanced router for our app.
  // states machines allow ionic module to build automatically a "back" button
  // and are far more flexible than native ng-route from Angular js.
  // @see ui-router module : https://github.com/angular-ui/ui-router
  .config([
    '$stateProvider', '$urlRouterProvider', '$sceDelegateProvider', 'config', '$translateProvider',
    function($stateProvider, $urlRouterProvider, $sceDelegateProvider, config, $translateProvider) {

      // if none of the below states are matched, use this as the fallback
      // for now, redirect to a 404 state, to let us know something goes wrong.
      $urlRouterProvider.otherwise('/app/main/themes');

      $translateProvider.preferredLanguage('fr');

      $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',

        // Allow loading from soundcloud domain.  Notice the difference between * and **.
        'https://*.soundcloud.com/**',

        // Allow access to our server
        config.serverUrl + '/**'

      ]);

      $translateProvider.translations('en', {
        APP_TAB_ME_TITLE: "Me",
        APP_TAB_USERS_TITLE: "Users",
        CANCEL_BUTTON: "Cancel",
        SAVE_BUTTON: "Save"
      });

      $translateProvider.translations('fr', {
        APP_TAB_ME_TITLE: "Moi",
        APP_TAB_USERS_TITLE: "Utilisateurs",
        CANCEL_BUTTON: "Annuler",
        SAVE_BUTTON: "Sauvegarder"
      });


    }]);





