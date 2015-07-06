/**
 * Définition des quizz : quizDefinitionModel sert à stocker
 * les méta-données permettant de construire à la fois le formulaire
 * d'un quizz et son affichage.
 *
 * Contient les metadefinitions des quizz : id, templates et controlleurs à utiliser, etc...
 */
 angular.module('app.quiz').factory('quizDefinitionModel', ['$filter', 'languageService', 'quizDefinitionStore', function($filter, languageService, quizDefinitionStore) {

  var quizzes = quizDefinitionStore;

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