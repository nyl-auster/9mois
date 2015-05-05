
angular.module('app.todo')

  // create our states; this is some kind of advanced router for our app.
  // states machines allow ionic module to build automatically a "back" button
  // and are far more flexible than native ng-route from Angular js.
  // @see ui-router module : https://github.com/angular-ui/ui-router
  .config([
    '$stateProvider', '$urlRouterProvider', 'config', '$translateProvider',
    function($stateProvider, $urlRouterProvider,  config, $translateProvider) {

      $stateProvider

        .state('app.main.todo', {
          url: '/app/main/todo',
          views: {
            'app-main-todo': {
              templateUrl: 'modules/todo/templates/app-main-todo.html'
            }
          }
        })

        .state('app.main.todoDetail', {

          url: '/app/main/todo/:listId',
          views: {
            'app-main-todo': {
              templateUrl: 'modules/todo/templates/app-main-tasks.html'
            }
          },
          // disabled webview bounce on focus input field / keyboard apparition
          onEnter: function($ionicPlatform){
            $ionicPlatform.ready(function() {
              if(window.cordova ){
                cordova.plugins.Keyboard.disableScroll(true);
              }

            });
          },

          onExit: function($ionicPlatform){
            $ionicPlatform.ready(function() {
              if(window.cordova){
                cordova.plugins.Keyboard.disableScroll(false);

              }
            });
          }

        });

    }]);
