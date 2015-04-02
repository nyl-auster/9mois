angular.module('app.week')

  .controller("weekController", ['$scope', 'weekService', function($scope, weekService) {
    $scope.textOfTheWeek = weekService.getCurrent();
  }]);