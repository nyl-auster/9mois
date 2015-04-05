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