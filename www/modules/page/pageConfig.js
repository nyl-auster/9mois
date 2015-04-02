
angular.module('app.page')

  // create our states; this is some kind of advanced router for our app.
  // states machines allow ionic module to build automatically a "back" button
  // and are far more flexible than native ng-route from Angular js.
  // @see ui-router module : https://github.com/angular-ui/ui-router
  .config([
    '$stateProvider', '$urlRouterProvider', 'config', '$translateProvider',
    function($stateProvider, $urlRouterProvider,  config, $translateProvider) {

      $stateProvider

        .state('app.main.theme', {
          url: '/app/main/theme',
          views: {
            'app-main-theme': {
              templateUrl: 'app-main-theme.html'
            }
          }
        })

        .state('app.main.themePage', {
          url: '/app/main/page',
          views: {
            'app-main-theme': {
              templateUrl: 'app-main-theme-page.html'
            }
          }
        });

    }]);
