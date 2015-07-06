angular.module('app.quiz')

  .controller('rencontreViewController', ['$stateParams', '$scope', 'quizModel', 'quizDefinitionModel', function($stateParams, $scope, quizModel, quizDefinitionModel) {

    // display nice labels for select choices.
    console.log($stateParams);
    $scope.datas.rencontreMoment =  $scope.displayOptionsLabel($scope.datas.rencontreMoment, $scope.datas._definition.schema.rencontreMoment);

  }]);