/**
 * Base module.
 * Things needed by all other modules goes here.
 * Every module depends on base module.
 */
angular.module('app.jsonStore').factory('jsonStoreFactory', ['localStorageFactory', function(localStorageFactory) {

  // initialize object jsonStore to avoid undefined errors later.
  var jsonStore = {

    staging: {
      local: {
        datas:{}
      },
      remote_pushed: {
        datas:{}
      },
      remote_pulled: {
        datas:{}
      }
    }

  };

  return {

    write: function(key, datas) {

      // create this new datas entry if does not exist yet
      if (typeof jsonStore.staging.local.datas[key] == 'undefined') {
        jsonStore.staging.local.datas[key] = {};
      }

      jsonStore.staging.local.datas[key].datas = datas;
      jsonStore.staging.local.datas[key].datas.length = datas.length;
      jsonStore.staging.local.datas[key].updated = Date.now();
      jsonStore.staging.local.datas.updated = Date.now();

      // save in local storage
      localStorageFactory.setObject('appJsonStore', jsonStore);

      return jsonStore.staging.local.datas[key];

      // write in local storage for local persistence

      // try to post to the server
      // if http is successfull, update remote information
      // store['staging']['remote_pushed'][key]['datas'] = datas;
      // store['staging']['remote_pushed'][key]['updated'] = Date.now();

    },

    // return storage from datas local, but with an httpPromise.
    read: function(key) {

      var storedJson = localStorageFactory.getObject('appJsonStore');
      if (!angular.isDefined(storedJson.staging) || !angular.isDefined(storedJson.staging.local.datas[key])) {
        return {};
      }

      var datas = storedJson.staging.local.datas[key].datas;
      return datas;


      // if http promise is resolved, update staging informations
      // store['staging']['remote_pulled'][key]['datas'] = datas;
      // store['staging']['remote_pulled'][key]['updated'] = Date.now();

    }

  }

}]);