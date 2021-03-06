angular.module('app.theme')

  .controller('todoListController', ['$ionicPopup', '$scope', 'todoListFactory', '$ionicPopup', function($ionicPopup, $scope, todoListFactory, $ionicPopup) {

    $scope.lists = todoListFactory.getTodoLists();

    $scope.showDelete = false;

    $scope.toggleDelete = function() {
      return $scope.showDelete = !$scope.showDelete;
    };

    $scope.updateList = function(listId) {
      event.stopPropagation();
      event.preventDefault();
      var list = todoListFactory.getList(listId);
      $ionicPopup.prompt({
        title: 'Renommer la liste : " ' + list.name + '" ',
        inputType: 'text',
        inputPlaceholder: list.name
      }).then(function(data) {
        if (!data) return;
        list.name = data;
        todoListFactory.updateList(listId, list);
        $scope.lists = todoListFactory.getTodoLists();
      }).finally(function(){

      });

    };

    $scope.deleteList = function(listId) {
      $ionicPopup.confirm({
        title: 'Supprimer la tache',
        template: 'Etes vous sûr de vouloir supprimer cette tache ? '
      }).then(function(res) {
        if(res) {
          todoListFactory.deleteList(listId);
          $scope.lists = todoListFactory.getTodoLists();
        }
      })

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
        $scope.lists = todoListFactory.getTodoLists();
      })
    }

  }]);