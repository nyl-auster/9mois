angular.module("app.language")

.factory('languageService', [function(){

    return {

      get: function() {
        return "fr";
      }

    }


  }]);