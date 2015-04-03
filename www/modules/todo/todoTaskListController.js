angular.module('app.page')

  .controller('todoTaskListController', ['$scope', '$ionicPopup', 'listFactory', '$stateParams', function($scope, $ionicPopup, listFactory, $stateParams) {

    var listId = $stateParams.listId;
    var list = listFactory.getListById(listId);
    var tasks = listFactory.getAllTasksByListId(listId);
    $scope.tasksSuggested = list.tasks_suggested;
    console.log(tasks);

    $scope.listName = list.name;

    $scope.tasks = tasks;

    $scope.showDelete = false;

    $scope.toggleDelete = function() {
      $scope.showDelete = !$scope.showDelete;
      return $scope.showDelete;
    };

    $scope.updateTask = function(taskId) {
      console.log(taskId);
      var task = listFactory.getTaskByIdInList(listId, taskId);
      $ionicPopup.prompt({
        title: 'Renommer la tache : " ' + task.name + '" ',
        inputType: 'text',
        inputPlaceholder: task.name
      }).then(function(data) {
        if (!data) {
          return;
        }
        task.name = data;
        listFactory.updateTaskInList(listId, taskId, task);
      });
      $scope.tasks = listFactory.getAllTasksByListId(listId);
    };

    $scope.deleteTask = function(taskId) {
      listFactory.deleteTaskInList(listId, taskId);
      $scope.tasks = listFactory.getAllTasksByListId(listId);
    };

    $scope.add = function() {
      $ionicPopup.prompt({
        title: 'Décrivez cette nouvelle tache',
        inputType: 'text'
      }).then(function(data) {
        if (!data) {
          return;
        }
        var task = {
          name: data
        };
        listFactory.createTaskInList(listId, task);
        $scope.tasks = listFactory.getAllTasksByListId(listId);
      })
    }

  }]);