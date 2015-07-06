angular.module('app.quiz')

  .controller('rencontreViewController', ['$scope', 'quizModel', 'quizDefinitionModel', function($scope, quizModel, quizDefinitionModel) {

    // afficher les labels des options plutôt que les valeurs machine
    // en consultant la définition de notre quizz
    // et les réponses sélectionnés précédemment par l'utilisateur sur le
    // formulaire du quizz
    $scope.datas.rencontreMoment =  $scope.displayOptionsLabel($scope.datas.rencontreMoment, $scope.datas._definition.schema.rencontreMoment);
    $scope.datas.rencontrePremiereConversation =  $scope.displayOptionsLabel($scope.datas.rencontrePremiereConversation, $scope.datas._definition.schema.rencontrePremiereConversation);

  }]);