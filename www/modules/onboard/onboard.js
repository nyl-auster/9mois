/**
 * Onboard module : these are the first screens
 * the user see when first running the app. We
 * may present here the application and ask him
 * if he is ok with geolocalisation and other permissions etc ...
 */
(function(){

  angular.module('app.onboard', [
      'app.base',
      'app.authentication',
      'app.user'
    ])

    .run(['$rootScope', function($rootScope){


    }]);

})();
