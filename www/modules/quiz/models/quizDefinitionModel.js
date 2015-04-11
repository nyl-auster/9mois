/**
 * Agnostic persistence model for quiz Definition.
 *
 * Contient les metadefinitions des quizz : id, templates et controlleurs à utiliser, etc...
 */
angular.module('app.quiz').factory('quizDefinitionModel', ['$filter', function($filter) {

  var quizzes = [
    {
      id: 'histoire_debut',
      theme_id: 'trimestre_1',
      name: "Comment l'histoire a commencé",
      templateFormUrl: "modules/quiz/quizzes/rencontre/rencontreForm.html",
      templateViewUrl: "modules/quiz/quizzes/rencontre/rencontreView.html",
    },
    {
      id: '2',
      theme_id: 'trimestre_1',
      name: "questionnaire 2"
    },
    {
      id: '3',
      theme_id: 'trimestre_1',
      name: 'questionnaire 3'
    },
    {
      id: '4',
      theme_id: 'trimestre_3',
      name: 'questionnaire 4'
    }
  ];

  return {

    getAllByThemeId: function(themeId) {
      return $filter('filter')(quizzes, {theme_id: themeId});
    },

    getAll: function() {
      return quizzes;
    },

    get: function(id) {
      var result = $filter('filter')(quizzes, {id: id});
      return result[0];
    }

  }

}]);