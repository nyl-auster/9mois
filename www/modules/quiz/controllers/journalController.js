/**
 * Journal Controller
 *
 * La liste des quiz remplis par l'utilisateur, pour le tab "journal"
 *
 * @see app.main.journal state in quizConfig.js
 */
angular.module('app.quiz').controller('journalController', ['$stateParams', '$scope', 'quizModel', '$filter', function($stateParams, $scope, quizModel, $filter) {

  // get all quiz
  $scope.allDatas = quizModel.getAllFilled();

  /**
   * Pour les éléments de types checbox / select list :
   * Afficher un label visible en fonction de l'identifiant du choix enregistré
   * Par exemple, pour "apres_midi", afficher "Après midi".
   *
   * @param optionsDatas
   * @param optionsMetadatas
   * @returns {string}
   */
  $scope.displayOptionsLabel = function(optionsDatas, optionsMetadatas) {

    var selectedOptions = [];
    var readableOptions = [];

    //console.log(optionsDatas.selected);
    angular.forEach(optionsDatas.selected, function(selected, id) {

      if (selected == true) {

        selectedOptions.push(id);
        angular.forEach(optionsMetadatas.options, function(optionMetadatas, key) {

          if (optionMetadatas.value == id) {
            readableOptions.push(optionMetadatas.label);
          }
        });

      }

    });

    if (typeof(optionsDatas.other) !== "undefined" ) {
      readableOptions.push(optionsDatas.other);
    }

    return readableOptions.join(', ');
  };

}]);