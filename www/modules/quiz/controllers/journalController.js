
angular.module('app.quiz').controller('journalController', ['$stateParams', '$scope', 'quizModel', '$filter', function($stateParams, $scope, quizModel, $filter) {

  var allDatas = quizModel.getAllFilled();
  $scope.allDatas = allDatas;


  $scope.displayOptions = function(optionsDatas, optionsMetadatas) {

    var selectedOptions = new Array();
    var readableOptions = new Array();

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