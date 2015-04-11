
angular.module('app.quiz').factory('quizModel', ['$filter', function($filter) {

  var quizzes = [
    {
      theme_id: 'trimestre_1',
      name: "questionnaire 1",
      id: 1
    },
    {
      theme_id: 'trimestre_1',
      id: 2,
      name: "questionnaire 2"
    },
    {
      id: 3,
      theme_id: 'trimestre_1',
      name: 'questionnaire 3'
    },
    {
      theme_id: 'trimestre_3',
      id: 4,
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

    getSingleById: function(id) {
      console.log(id);
      quizzes = $filter('filter')(quizzes, {id: id});
      return quizzes[0];
    }

  }

}]);