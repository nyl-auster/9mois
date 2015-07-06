angular.module('app.quiz')

  .controller('rencontreViewController', ['$scope', 'quizModel', 'quizDefinitionModel', function($scope, quizModel, quizDefinitionModel) {

    // display nice labels for select choices.
    console.log($scope);
    $scope.datas.rencontreMoment =  $scope.displayOptionsLabel($scope.datas.rencontreMoment, $scope.datas._definition.schema.rencontreMoment);

  }]);