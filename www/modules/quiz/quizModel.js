/**
 * Agnostic persistence model for quiz.
 */
angular.module('app.quiz').factory('quizModel', ['$filter', 'jsonStoreFactory', function($filter, jsonStoreFactory) {

  var jsonStoreKey = 'quizzes';

  var quizzes = [
    {
      id: 'histoire_debut',
      theme_id: 'trimestre_1',
      name: "Comment l'histoire a commencé",
      templateFormUrl: "modules/quiz/quizzes/rencontre/rencontreForm.html",
      templateViewUrl: "modules/quiz/quizzes/rencontre/rencontreView.html",
      datas: {}
    },
    {
      id: '2',
      theme_id: 'trimestre_1',
      name: "questionnaire 2",
      datas: {}
    },
    {
      id: '3',
      theme_id: 'trimestre_1',
      name: 'questionnaire 3',
      datas: {}
    },
    {
      id: '4',
      theme_id: 'trimestre_3',
      name: 'questionnaire 4',
      datas: {}
    }
  ];

  return {

    getAllByThemeId: function(themeId) {
      return $filter('filter')(quizzes, {theme_id: themeId});
    },

    getAll: function() {
      var storedQuizzes = jsonStoreFactory.read(jsonStoreKey);
      var model = this;
      angular.forEach(storedQuizzes, function(value, key) {
        storedQuizzes[key]['_definition'] = model.getDefinition(key);
      });
      console.log(storedQuizzes);
      return storedQuizzes;
    },

    getDefinition: function(id) {
      var result = $filter('filter')(quizzes, {id: id});
      return result[0];
    },

    get: function(id) {
      var storedQuizzes = jsonStoreFactory.read(jsonStoreKey);
      return storedQuizzes[id];
    },

    // update stored quizzes datas for a particular quizz
    save: function(id, quizDatas) {
      var storedQuizzes = jsonStoreFactory.read(jsonStoreKey);
      storedQuizzes[id] = quizDatas;
      jsonStoreFactory.write(jsonStoreKey, storedQuizzes);
    }

  }

}]);