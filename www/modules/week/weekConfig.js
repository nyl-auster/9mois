
angular.module('app.week').config(['$stateProvider', function($stateProvider) {

  $stateProvider

    .state('app.main.week', {
      url: '/app/main/week',
      views: {
        'app-main-week': {
          templateUrl: 'modules/week/templates/app-main-week.html'
        }
      }
    });

}]);