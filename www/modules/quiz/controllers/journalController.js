/**
 * Journal Controller
 *
 * Display all quizz filled by user.
 * @see app.main.journal state
 */
angular.module('app.quiz').controller('journalController', ['$stateParams', '$scope', 'quizModel', '$filter', function($stateParams, $scope, quizModel, $filter) {

  // get all quiz
  var allDatas = quizModel.getAllFilled();
  $scope.allDatas = allDatas;


  /**
   * For choices : display label instead of stored values (e.g :
   * "Après midi" instead of "apres_midi" )
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