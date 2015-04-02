
angular.module('app.page')

  // create our states; this is some kind of advanced router for our app.
  // states machines allow ionic module to build automatically a "back" button
  // and are far more flexible than native ng-route from Angular js.
  // @see ui-router module : https://github.com/angular-ui/ui-router
  .config([
    '$stateProvider', '$urlRouterProvider', 'config', '$translateProvider',
    function($stateProvider, $urlRouterProvider,  config, $translateProvider) {

      $stateProvider

        .state('app.main.page', {
          url: '/app/main/page',
          views: {
            'app-main-page': {
              templateUrl: 'modules/theme/templates/app-main-page.html'
            }
          }
        });

    }]);
