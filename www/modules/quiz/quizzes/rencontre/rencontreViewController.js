angular.module('app.quiz')

  .controller('rencontreViewController', ['$stateParams', '$scope', 'quizModel', 'quizDefinitionModel', function($stateParams, $scope, quizModel, quizDefinitionModel) {


    var quizDefinition = $scope.datas._definition;
    //$scope.datas.rencontreMoment =  quizDefinitionModel.getOptionLabel($scope.datas._definition.id, 'rencontreMoment', $scope.datas.rencontreMoment);

  }]);