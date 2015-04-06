/**
 * Todos
 */
angular.module('app.todo', [
  'app.base',
]);


angular.module('app.todo').directive("appAddMoreItems", ['$timeout', function($timeout) {
  return {
    restrict: "A",
    link: function(scope, element, attributes) {

      // wait angular has translated id such as more-{{listId}}
      $timeout(function() {
        var target = angular.element(document.getElementById(attributes.targetId));
        console.log(target);
        element.bind('click', function() {
          var item = target[0].cloneNode(true);
          // reset input value for this new item.
          item.getElementsByTagName('input')[0].value = '';
          target[0].parentNode.appendChild(item);
        });

      });

    }
  }
}]);

/*
 angular.module('app.todo').directive("addbuttonsbutton", function() {
 return {
 restrict: "E",
 scope: {
 id: '@'
 },
 template: '<div id="{{id}}" class="space-for-fields"></div>' +
 '<ion-list>' +
 '<button addfields class="icon ion-plus button button-positive"></button>' +
 '<ion-list>'
 }
 });


 angular.module('app.todo').directive("addfields", function($compile) {
 return {
 scope: {},
 link: function(scope, element, attrs) {
 var $i= 0;
 element.bind("click", function() {
 angular.element(document.getElementById('space-for-buttons')).append($compile(

 '<ion-item>' +
 '<input ng-model="test[' + $i++ + ']" type="text" />' +
 '</ion-item>'

 )(scope));
 });
 }
 };
 });
 */
