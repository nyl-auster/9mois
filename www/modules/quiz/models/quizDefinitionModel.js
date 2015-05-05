/**
 * Agnostic persistence model for quiz Definition.
 *
 * Contient les metadefinitions des quizz : id, templates et controlleurs à utiliser, etc...
 */
angular.module('app.quiz')

  .factory('quizDefinitionModel', ['$filter', 'languageService', function($filter, languageService) {

  var quizzes = [
    {
      id: 'histoire_debut_fr',
      language: 'fr',
      theme_id: 'trimestre_1',
      name: "Comment l'histoire a commencé",
      templateFormUrl: "modules/quiz/quizzes/rencontre/rencontreForm.html",
      templateViewUrl: "modules/quiz/quizzes/rencontre/rencontreView.html",
      schema: {
        rencontreMoment: {
          prefix: '',
          suffix: '',
          options: [
            { text: "le matin", ngTrueValue: "'matin'", checked:false },
            { text: "l'après midi", ngTrueValue: "'apres_midi'", checked:false },
            { text: "le soir", ngTrueValue: "'soir'", checked:false }
          ]
        },
        rencontrePremiereConversation: {
          prefix: '',
          suffix: '',
          options: [
            { text: "banal", value: "banal" },
            { text: "chaotique", value: "chaotique" },
            { text: "simple", value: "simple" },
            { text: "orageux", value: "orageux" },
            { text: "joyeux", value: "joyeux" },
            { text: "innocent", value: "innocent" },
            { text: "pour le travail", value: "pour_le_travail" }
          ]
        }
      }
    },
    {
      id: '2',
      language: 'fr',
      theme_id: 'trimestre_1',
      name: "questionnaire 2"
    },
    {
      id: '3',
      language: 'fr',
      theme_id: 'trimestre_1',
      name: 'questionnaire 3'
    },
    {
      id: '4',
      language: 'fr',
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

    getOptionLabel: function(id, variableName, value) {
      var quizzDefinition = this.get(id);
      var options = quizzDefinition.schema[variableName].options;
      var result = $filter('filter')(options, {value: value});
      return result[0].text;
    },

    get: function(id) {
      var result = $filter('filter')(quizzes, {id: id});
      return result[0];
    }

  }

}]);