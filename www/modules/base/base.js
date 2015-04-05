/**
 * Base module.
 * Things needed by all other modules goes here.
 * Every module depends on base module.
 */
angular.module('app.base', [
  // Declare here all AngularJS dependencies that are shared by all modules.
  'ionic',
  'app.config',
  'pascalprecht.translate',
  'ngCordova'
]);

angular.module('app.base').directive('autoGrow', function() {
  return function(scope, element, attr){

    element.css('resize', 'none');
    element.css('overflow', 'hidden');

    var update = function(event) {
      element.css('height', element[0].scrollHeight + 'px');
    }

    element.bind('keydown change blur focus', update);

    update();
  }
});
