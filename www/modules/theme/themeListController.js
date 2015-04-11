
angular.module('app.theme').controller('themeListController', ['$scope', 'themeModel', function($scope, themeModel) {

  $scope.themes = themeModel.getAll();

}]);