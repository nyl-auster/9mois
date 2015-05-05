angular.module('app.config')

  .controller('configController', ['$scope', 'configModel', function($scope, configModel) {

    config = configModel.getAll();
    $scope.config = config;

  }]);