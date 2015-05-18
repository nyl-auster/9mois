angular.module('app.quiz')

  .controller('rencontreViewController', ['$stateParams', '$scope', 'quizModel', 'quizDefinitionModel', function($stateParams, $scope, quizModel, quizDefinitionModel) {


    var quizDefinition = $scope.datas._definition;
    $scope.datas.rencontreMoment =  $scope.displayOptions($scope.datas.rencontreMoment, $scope.datas._definition.schema.rencontreMoment);

  }]);