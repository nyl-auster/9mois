/**
 * Agnostic persistence model for quiz Definition.
 *
 * Contient les metadefinitions des quizz : id, templates et controlleurs à utiliser, etc...
 */
angular.module('app.quiz')

  .factory('quizDefinitionModel', ['$filter', 'languageService', function($filter, languageService) {

  var quizzes = [
    {
      // machine name / id of this quiz
      // CHANGE ID ONLY IF YOU KNOW WHAT YOU ARE DOING
      id: 'rencontre',

      // only for language :
      language: 'fr',

      // le theme auquel appartient ce quiz
      theme_id: 'trimestre_1',

      // le titre du quiz
      name: "Comment l'histoire a commencé",

      // le template à utiliser pour le formulaire du quiz
      templateFormUrl: "modules/quiz/quizzes/rencontre/rencontreForm.html",

      // le template à utiliser pour afficher les résultats du quiz
      templateViewUrl: "modules/quiz/quizzes/rencontre/rencontreView.html",

      // données du quiz : description des variables à renseigner par l'utilisateur
      schema: {
        rencontreMoment: {
          options: [
            { label: "le matin", value: "matin", selected: false},
            { label: "l'après midi", value: 'apres_midi', selected :false },
            { label: "le soir", value: 'soir', selected: false }
          ]
        },
        rencontrePremiereConversation: {
          options: [
            { label: "banal", value: "banal" },
            { label: "chaotique", value: "chaotique" },
            { label: "simple", value: "simple" },
            { label: "orageux", value: "orageux" },
            { label: "joyeux", value: "joyeux" },
            { label: "innocent", value: "innocent" },
            { label: "pour le travail", value: "pour_le_travail" }
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
      var options = quizzDefinition.datas[variableName].options;
      var result = $filter('filter')(options, {value: value});
      return result[0].text;
    },

    get: function(id) {
      var result = $filter('filter')(quizzes, {id: id});
      return result[0];
    }

  }

}]);