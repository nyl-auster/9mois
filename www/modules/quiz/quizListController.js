
angular.module('app.quiz').controller('quizListController', ['$stateParams', '$scope', 'quizModel', function($stateParams, $scope, quizModel) {

  var themeId = $stateParams.themeId;

  $scope.quizzes = quizModel.getAllByThemeId(themeId);

}]);