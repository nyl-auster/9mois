
angular.module('app.quiz').controller('quizDetailController', ['$stateParams', '$scope', 'quizModel', function($stateParams, $scope, quizModel) {

  var quizId = $stateParams.quizId;

  var quiz = quizModel.getDefinition(quizId);
  $scope.quiz = quiz;
  $scope.datas = quizModel.get(quizId);
  console.log(quizModel.get(quizId));
  console.log($scope.datas);

  $scope.saveQuizDatas = function(quizDatas) {
    quizModel.save(quizId, quizDatas);
  };

}]);