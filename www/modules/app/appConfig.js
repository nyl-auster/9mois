
angular.module('app')

  // create our states; this is some kind of advanced router for our app.
  // states machines allow ionic module to build automatically a "back" button
  // and are far more flexible than native ng-route from Angular js.
  // @see ui-router module : https://github.com/angular-ui/ui-router
  .config(['$ionicConfigProvider', '$stateProvider', '$urlRouterProvider', '$sceDelegateProvider', 'config', '$translateProvider', function($ionicConfigProvider, $stateProvider, $urlRouterProvider, $sceDelegateProvider, config, $translateProvider) {

    // if none of the below states are matched, use this as the fallback
    // for now, redirect to a 404 state, to let us know something goes wrong.
    $urlRouterProvider.otherwise('/app/main/week');

    $translateProvider.preferredLanguage('fr');

    // try cache of ionic
    // $ionicConfigProvider.views.forwardCache(true);
    $ionicConfigProvider.views.maxCache(30);

    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',

      // Allow loading from soundcloud domain.  Notice the difference between * and **.
      'https://*.soundcloud.com/**',

      // Allow access to our server
      config.serverUrl + '/**'

    ]);

    $stateProvider

      .state('app.main.home', {
        url: '/app/main/home',
        views: {
          'app-main-home': {
            templateUrl: 'modules/app/templates/app-main-home.html'
          }
        }
      });



  }]);


