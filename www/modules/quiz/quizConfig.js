
angular.module('app.quiz')

  // create our states; this is some kind of advanced router for our app.
  // states machines allow ionic module to build automatically a "back" button
  // and are far more flexible than native ng-route from Angular js.
  // @see ui-router module : https://github.com/angular-ui/ui-router
  .config([
    '$stateProvider', '$urlRouterProvider', 'config', '$translateProvider',
    function($stateProvider, $urlRouterProvider,  config, $translateProvider) {

      $stateProvider

        .state('app.main.quiz', {
          url: '/app/main/quiz/:themeId',
          views: {
            'app-main-theme': {
              templateUrl: 'modules/quiz/templates/quizList.html'
            }
          }
        })

        .state('app.main.quizDetail', {
          url: '/app/main/quiz/:quizId',
          views: {
            'app-main-theme': {
              templateUrl: 'modules/quiz/templates/quizForm.html'
            }
          }
        })

        .state('app.main.journal', {
          url: '/app/main/journal',
          cache: false,
          views: {
            'app-main-journal': {
              templateUrl: 'modules/quiz/templates/journal.html'
            }
          }
        });

    }]);
