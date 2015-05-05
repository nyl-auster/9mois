angular.module('app.week')

  .controller("weekController", ['$scope', 'weekService', '$cordovaVibration', function($scope, weekService, $cordovaVibration) {
    $scope.textOfTheWeek = weekService.getCurrent();
    $scope.vibrer = function() {
        $cordovaVibration.vibrate(100);
    };
  }]);