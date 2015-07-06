/**
 * Agnostic persistence model for quiz.
 */
angular.module('app.quiz').factory('quizModel', ['$filter', 'quizDefinitionModel', 'jsonStoreFactory', function($filter, quizDefinitionModel, jsonStoreFactory) {

  var jsonStoreKey = 'quizzes';

  return {

    getAll: function() {
      var datas = jsonStoreFactory.read(jsonStoreKey);
      angular.forEach(datas, function(value, key) {
        // on ajoute une clef speciale "_definition", qui contient
        // les metadonnées du quizzk !
        datas[key]['_definition'] = quizDefinitionModel.get(key);
      });
      return datas;
    },

    getAllFilled: function() {
      var datas = this.getAll();
      return datas;
    },

    get: function(id) {
      var datas = jsonStoreFactory.read(jsonStoreKey);
      return datas[id];
    },

    // update stored quizzes datas for a particular quizz
    save: function(id, quiz) {
      var datas = jsonStoreFactory.read(jsonStoreKey);
      datas[id] = quiz;
      jsonStoreFactory.write(jsonStoreKey, datas);
    },

    // return true if quizDatas are empty
    // (all variables considered as empty string, except "_definition" special key
    isFilled: function(quizDatas) {
      angular.forEach(quizDatas, function(value, key) {
        console.log(value);
      });
    }

  }

}]);