/**
 * Méthode de configuration du module quiz.
 * Les états de routes UI sont notamment définis ici
 */
angular.module('app.quiz')

  .config([
    '$stateProvider', '$urlRouterProvider', 'config', '$translateProvider',
    function($stateProvider, $urlRouterProvider,  config, $translateProvider) {

      // création des "states" pour les quiz
      $stateProvider

        // afficher la liste des quiz d'un theme particulier
        .state('app.main.quiz', {
          url: '/app/main/quiz/:themeId',
          views: {
            'app-main-theme': {
              templateUrl: 'modules/quiz/templates/quizList.html'
            }
          }
        })

        // afficher le formulaire du quiz demandé
        .state('app.main.quizDetail', {
          url: '/app/main/quiz/:quizId',
          views: {
            'app-main-theme': {
              templateUrl: 'modules/quiz/templates/quizForm.html'
            }
          }
        })

        // liste des réponses aux questions
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
