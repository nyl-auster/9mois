
angular.module('app.quiz').controller('quizDetailController', ['$stateParams', '$scope', 'quizModel', function($stateParams, $scope, quizModel) {

  var id = $stateParams.quizId;

  var quizzes = quizModel.getSingleById(id);
  console.log(quizzes);
  $scope.quizz = quizzes

}]);