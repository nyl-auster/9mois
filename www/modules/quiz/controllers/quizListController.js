
angular.module('app.quiz')

  .controller('quizListController', ['$stateParams', '$scope', 'quizDefinitionModel', function($stateParams, $scope, quizDefinitionModel) {

  var themeId = $stateParams.themeId;

  $scope.quizzes = quizDefinitionModel.getAllByThemeId(themeId);

}]);