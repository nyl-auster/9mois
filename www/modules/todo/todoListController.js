angular.module('app.page')

  .controller('todoListController', ['$scope', 'todoFactory', '$ionicPopup', function($scope, todoFactory, $ionicPopup) {

    $scope.lists = todoFactory.getAllLists();

    $scope.add = function() {
      $ionicPopup.prompt({
        title: 'Enter a new list',
        inputType: 'text'
      }).then(function(data) {
        var list = {
          name: data
        };
        todoFactory.createList(list);
      })
    }

  }]);