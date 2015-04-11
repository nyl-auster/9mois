
angular.module('app.quiz').directive("quizInputText", function() {
  return {
    restrict: "E",
    templateUrl: "modules/quiz/templates/quizInputText.html",
    scope: {
      datas: '=',
      property: '='
    }
  };
});
