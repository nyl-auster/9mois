/**
 * Modele de persistence agnostique pour les quiz.
 * Pour l'heure, sauvegarde les données du quiz via
 * notre service jsonStoreFactory
 */
 angular.module('app.quiz').factory('quizModel', ['$filter', 'quizDefinitionModel', 'jsonStoreFactory', function($filter, quizDefinitionModel, jsonStoreFactory) {

  var jsonStoreKey = 'quizzes';

  return {

    getAll: function() {
      var datas = jsonStoreFactory.read(jsonStoreKey);
      angular.forEach(datas, function(value, key) {
        // on ajoute une clef speciale "quizDefinition", qui contient
        // les metadonnées du quizz !
        datas[key]['quizDefinition'] = quizDefinitionModel.get(key);
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
    // (all variables considered as empty string, except "quizDefinition" special key
      isFilled: function(quizDatas) {
        angular.forEach(quizDatas, function(value, key) {
          console.log(value);
        });
      }

    }

  }]);