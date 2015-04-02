angular.module('app.page')

  .controller('todoListController', ['$scope', 'listFactory', '$ionicPopup', function($scope, todoFactory, $ionicPopup) {

    $scope.lists = todoFactory.getAllLists();


    $scope.showDelete = false;

    $scope.toggleDelete = function() {
      $scope.showDelete = !$scope.showDelete;
      return $scope.showDelete;
    };

    $scope.deleteList = function(listId) {
      console.log(listId);
      todoFactory.deleteList(listId);
      $scope.lists = todoFactory.getAllLists();
      console.log($scope.lists);
    };

    $scope.add = function() {
      $ionicPopup.prompt({
        title: 'Entrez un nom pour cette nouvelle liste',
        inputType: 'text'
      }).then(function(data) {
        if (!data) {
          return;
        }
        var list = {
          name: data
        };
        todoFactory.createList(list);
      })
    }

  }]);