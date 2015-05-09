angular.module('app.quiz')

  .controller('rencontreFormController', ['$stateParams', '$scope', 'quizModel', 'quizDefinitionModel', function($stateParams, $scope, quizModel, quizDefinitionModel) {

    var quizDefinition = quizDefinitionModel.get($stateParams.quizId);
    // il faut juste stocker dans le store les valeurs (matin, apres_midi) et le champ autre.
    // exemple ['matin' => 1, 'midi' => 0, '_autre' => 'test']
    $scope.datas.rencontreMoment = quizDefinition.datas.rencontreMoment;

  }]);