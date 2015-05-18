/**
 * Controller for quizForm.html template.
 */
angular.module('app.quiz').controller('quizFormController', ['$stateParams', '$scope', 'quizDefinitionModel', 'quizModel', function($stateParams, $scope, quizDefinitionModel, quizModel) {

  // get quizId from urlÒÒ
  var quizId = $stateParams.quizId;

  // get quizz definition
  $scope.quiz  = quizDefinitionModel.get(quizId);

  // get datas stored about this quizz
  $scope.datas = quizModel.get(quizId);


  // Save quiz datas to persistent storage.
  $scope.saveQuizDatas = function(quizDatas) {
    quizModel.save(quizId, quizDatas);
  };

  $scope.saveOptions = function(options) {
    console.log(options);
  }

}]);