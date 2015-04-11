
angular.module('app.quiz').controller('journalController', ['$stateParams', '$scope', 'quizModel', function($stateParams, $scope, quizModel) {

  var allDatas = quizModel.getAllFilled();
  $scope.allDatas = allDatas;

}]);