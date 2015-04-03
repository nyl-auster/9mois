angular.module('app.page')

  .controller('todoListController', ['$scope', 'todoListFactory', '$ionicPopup', function($scope, todoListFactory, $ionicPopup) {

    $scope.lists = todoListFactory.getAllLists();

    $scope.showDelete = false;

    $scope.toggleDelete = function() {
      return $scope.showDelete = !$scope.showDelete;
    };

    $scope.updateList = function(listId) {
      var list = todoListFactory.getListById(listId);
      $ionicPopup.prompt({
        title: 'Renommer la liste : " ' + list.name + '" ',
        inputType: 'text',
        inputPlaceholder: list.name
      }).then(function(data) {
        if (!data) {
          return;
        }
        list.name = data;
        todoListFactory.updateList(listId, list);
      });
      $scope.lists = todoListFactory.getAllLists();
    };

    $scope.deleteList = function(listId) {
      todoListFactory.deleteList(listId);
      $scope.lists = todoListFactory.getAllLists();
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
        todoListFactory.addTodoList(list);
        $scope.lists = todoListFactory.getAllLists();
      })
    }

  }]);