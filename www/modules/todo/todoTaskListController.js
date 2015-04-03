angular.module('app.page')

  .controller('todoTaskListController', ['$scope', '$ionicPopup', 'todoListFactory', '$stateParams', function($scope, $ionicPopup, todoListFactory, $stateParams) {

    var listId = $stateParams.listId;
    var list = todoListFactory.getList(listId);
    var tasks = list.tasks;

    $scope.tasksSuggested = list.tasks_suggested;

    $scope.listName = list.name;
    $scope.tasks = tasks;
    $scope.showDelete = false;

    $scope.toggleDelete = function() {
      return $scope.showDelete = !$scope.showDelete;
    };

    $scope.updateTask = function(taskId) {
      var task = todoListFactory.getTaskFromList(listId, taskId);
      $ionicPopup.prompt({
        title: 'Renommer la tache : " ' + task.name + '" ',
        inputType: 'text',
        inputPlaceholder: task.name
      }).then(function(data) {
        if (!data) return;
        task.name = data;
        todoListFactory.updateTaskFromList(listId, taskId, task);
        $scope.tasks = todoListFactory.getAllTasksFromList(listId);
      });

    };

    $scope.deleteTask = function(taskId) {
      todoListFactory.deleteTaskFromList(listId, taskId);
      $scope.tasks = todoListFactory.getAllTasksFromList(listId);
    };

    $scope.add = function() {
      $ionicPopup.prompt({

        title: 'Décrivez cette nouvelle tache',
        inputType: 'text'
      }).then(function(data) {
        if (!data) return;
        var task = {
          name: data
        };
        todoListFactory.addTaskToList(listId, task);
        $scope.tasks = todoListFactory.getAllTasksFromList(listId);

      })
    }

  }]);