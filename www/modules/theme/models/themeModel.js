
angular.module('app.theme').factory('themeModel', ['themeStore', function(themeStore) {

  var themes = themeStore;

  return {

    getAll: function() {
      return themes;
    }

  }



}]);