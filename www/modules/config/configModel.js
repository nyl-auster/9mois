angular.module('app.config').factory('configModel', ['jsonStoreFactory', function(jsonStoreFactory) {

  var jsonStoreKey = "app.config";

  var config = {

    enabledLanguages: {

      fr: {
        name: 'fr'
      },
      en: {
        name: 'en'
      }

    },

    language: 'fr'
  };

  return {

    getAll: function() {
      return config;
    },

    get: function(id) {
      return config[id];
    },

    saveAll: function(newDatas) {
      jsonStoreFactory.write(jsonStorekey, newDatas);
    },

    save: function(id, newDatas) {
      var datas = jsonStoreFactory.read(jsonStoreKey);
      datas[id] = newDatas;
      jsonStoreFactory.write(jsonStoreKey, datas);
    }

  }


}]);