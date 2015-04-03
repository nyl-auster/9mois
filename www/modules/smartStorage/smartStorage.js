/**
 * Base module.
 * Things needed by all other modules goes here.
 * Every module depends on base module.
 */
angular.module('app.smartStorage').service('smartStorageService', [function() {

  var store = [];

  this.write = function(key, datas) {

    store['staging']['local'][key]['datas'] = datas;
    // write in local storage for local persistence

    // try to post to the server
    // if http is successfull, update remote information
    store['staging']['remote_pushed'][key]['datas'] = datas;
    store['staging']['remote_pushed'][key]['updated'] = null;

  };

  // return storage from datas local, but with an httpPromise.
  this.read = function(key, datas, $scope) {

    // if http promise is resolved, update staging informations
    store['staging']['remote_pulled'][key]['datas'] = datas;
    store['staging']['remote_pulled'][key]['updated'] = null;

  };

}]);