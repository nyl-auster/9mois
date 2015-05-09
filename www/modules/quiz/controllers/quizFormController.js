
angular.module('app.quiz').controller('quizFormController', ['$stateParams', '$scope', 'quizDefinitionModel', 'quizModel', function($stateParams, $scope, quizDefinitionModel, quizModel) {

  var quizId = $stateParams.quizId;

  $scope.quiz  = quizDefinitionModel.get(quizId);
  $scope.datas = quizModel.get(quizId);

  $scope.saveQuizDatas = function(quizDatas) {
    console.log(quizDatas);
    quizModel.save(quizId, quizDatas);
  };

  $scope.saveOptions = function(options) {
    console.log(options);
  }

}]);