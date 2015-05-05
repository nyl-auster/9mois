(function(){

  angular.module('app.category').config(
    ['$stateProvider', '$translateProvider', function($stateProvider, $translateProvider) {

      $stateProvider

        // update onboard.html, inserting onboard.app-main-home.html template when
        // onboard/home is the url.
        // templates is an object because when need to inform router UI of which templates
        // we want to update in onboard.html
        .state('app.main.categories', {
          url : "/app/main/categories",
          views: {
            // this is the value of "name" attribute of ion-nav-view from parent state template.
            'home': {
              templateUrl: 'modules/category/templates/app.main.categories.html'
            }
          }
        })


    }]);

})();