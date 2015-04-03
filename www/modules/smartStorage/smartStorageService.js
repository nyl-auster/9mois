
angular.module('app.base')

  // create our states; this is some kind of advanced router for our app.
  // states machines allow ionic module to build automatically a "back" button
  // and are far more flexible than native ng-route from Angular js.
  // @see ui-router module : https://github.com/angular-ui/ui-router
  .config([
    '$stateProvider',
    function($stateProvider) {

      $stateProvider

        // Abstract root of our app. Set as abstract, we dont want this state
        // to be transionned to. But it will be always "active" by default,
        // so this is some kind of middleware for our states routing.
        // All our states will be children of this states. As
        // children are rendered inside parent state template, we need
        // to provide here a template so that children can be rendered somewhere !
        .state('app', {
          abstract: true,
          // children states templates will be inserted here :
          template:'<ion-nav-view></ion-nav-view>'
        })

        // route not found will get here.
        .state('app.notFound', {
          url: '/not-found',
          // children states templates will be inserted here
          template:'State not found'
        })

        // Abstract root of app.main
        .state('app.main', {
          abstract: true,
          // children states templates will be inserted here
          templateUrl:'app-main.html'
        });

    }]);