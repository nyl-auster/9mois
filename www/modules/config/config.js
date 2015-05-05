angular.module('app.config')

  .config(['$stateProvider', function($stateProvider) {

    $stateProvider

      // update onboard.html, inserting onboard.app-main-home.html template when
      // onboard/home is the url.
      // templates is an object because when need to inform router UI of which templates
      // we want to update in onboard.html
      .state('app.main.config', {
        url : "/app/main/config",
        views: {
          // this is the value of "name" attribute of ion-nav-view from parent state template.
          'app-main-config': {
            templateUrl: 'modules/config/templates/config.html'
          }
        }
      })



  }]);


