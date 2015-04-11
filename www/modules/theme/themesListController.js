
angular.module('app.theme').controller('themesListController', ['$scope', 'themeModel', function($scope, themeModel) {

  $scope.themes = themeModel.getAll();

}]);