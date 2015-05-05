
angular.module('app.quiz').controller('quizFormParentController', ['$stateParams', '$scope', 'quizDefinitionModel', 'quizModel', function($stateParams, $scope, quizDefinitionModel, quizModel) {

  var quizId = $stateParams.quizId;

  $scope.quiz  = quizDefinitionModel.get(quizId);
  $scope.datas = quizModel.get(quizId);

  $scope.saveQuizDatas = function(quizDatas) {
    quizModel.save(quizId, quizDatas);
  };

}]);