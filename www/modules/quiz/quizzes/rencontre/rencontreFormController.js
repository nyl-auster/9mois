angular.module('app.quiz')

  .controller('rencontreFormController', ['$stateParams', '$scope', 'quizModel', 'quizDefinitionModel', function($stateParams, $scope, quizModel, quizDefinitionModel) {

    var definition = quizDefinitionModel.get($stateParams.quizId);

    $scope.rencontreMomentOptions = definition.schema.rencontreMoment.options;
    $scope.rencontrePremiereConversationOptions = definition.schema.rencontrePremiereConversation.options;

  }]);