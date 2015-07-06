/**
 * Controller for quizForm.html template.
 *
 * This a generic controller that will display the right
 * form corresponding to the quiz Id
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