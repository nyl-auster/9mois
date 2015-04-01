/**
 * Common module.
 * Things common to all others modules modules.
 */
angular.module('app.base', [
  // Declare here all AngularJS dependencies that are shared by all modules.
  'ionic',
  'app.config',
  'pascalprecht.translate',
  'LocalStorageModule'
]);