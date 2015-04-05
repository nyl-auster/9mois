angular.module('app.page')

  .controller('todoTaskListController', ['$scope', '$ionicPopup', 'todoListFactory', '$stateParams', function($scope, $ionicPopup, todoListFactory, $stateParams) {

    var listId = $stateParams.listId;
    var list = todoListFactory.getList(listId);
    var tasks = list.tasks;

    $scope.tasksSuggested = list.tasks_suggested;
    $scope.listId = listId;
    $scope.list =  list;

    $scope.test = function() {
      alert('ok');
    };


    // create an empty tasks array if nos tasks are found
    if (typeof tasks === 'undefined') {
      tasks = [{name: ''}];
    }
    // always add an empty task at the end of an existing lists of tasks
    else {
      tasks.push({name: ''});
    }
    $scope.tasks = tasks;

    $scope.taskListIsEmpty = function() {
      if (typeof $scope.tasks === 'undefined') {
        return true;
      }
      if ($scope.tasks.lenght == 0) {
        return true;
      }
      if ($scope.tasks.length == 1) {
        if ($scope.tasks[0].name == '') {
          return true;
        }
      }
      return false;
    };

    $scope.updateTasks = function(tasks) {
      list.tasks = tasks;
      todoListFactory.updateList(listId, list);
    };

    $scope.deleteTask = function(taskId) {
      $scope.tasks.splice(taskId, 1);
      list.tasks = $scope.tasks;
      todoListFactory.updateList(listId, list);
    };

    $scope.addTasks = function(task) {
      $scope.tasks.push({name:''});
      list.tasks = $scope.tasks;
      todoListFactory.updateList(listId, list);
    }

  }]);